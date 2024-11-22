import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Button } from "../button";
import { AudioPlayerProps, AudioPlayerState } from "@/constants/interfaces";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUri,
  onPlaybackStatusChange,
}) => {
  const [playerState, setPlayerState] = useState<AudioPlayerState>({
    sound: null,
    isPlaying: false,
    isLoading: true,
    duration: 0,
    position: 0,
  });

  useEffect(() => {
    return () => {
      if (playerState.sound) {
        playerState.sound.unloadAsync();
      }
    };
  }, [playerState.sound]);

  const loadAudio = async (): Promise<void> => {
    try {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        { uri: audioUri },
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      setPlayerState((prev) => ({
        ...prev,
        sound: audioSound,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error loading audio:", error);
      setPlayerState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    loadAudio();
  }, [audioUri]);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus): void => {
    if (!status.isLoaded) return;

    setPlayerState((prev) => ({
      ...prev,
      duration: status.durationMillis ?? 0,
      position: status.positionMillis ?? 0,
      isPlaying: status.isPlaying,
    }));

    onPlaybackStatusChange?.(status.isPlaying);
  };

  const togglePlayback = async (): Promise<void> => {
    const { sound, isPlaying } = playerState;
    if (!sound || playerState.isLoading) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    } catch (error) {
      console.error("Error toggling playback:", error);
    }
  };

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const waveformBars: number[] = Array.from(
    { length: 100 },
    () => Math.random() * 20 + 5
  );

  return (
    <View style={styles.container}>
      {playerState.isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Button
          onClickButton={togglePlayback}
          icon={
            <FontAwesome6
              name={playerState.isPlaying ? "pause" : "play"}
              size={wp(1.5)}
              color={Colors.white}
            />
          }
        />
      )}
      <Text style={styles.time}>
        {playerState.isPlaying
          ? formatTime(playerState.position)
          : formatTime(playerState.duration)}
      </Text>
      <View style={styles.waveformContainer}>
        <View style={styles.waveform}>
          {waveformBars.map((height, index) => (
            <View key={index} style={[styles.bar, { height }]} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default AudioPlayer;
