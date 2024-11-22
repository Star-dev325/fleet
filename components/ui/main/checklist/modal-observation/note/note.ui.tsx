import React from "react";
import { View, Image, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AudioPlayer, Button } from "@/components/core";
import { formatFileSize } from "@/constants/utils";
import { NoteProps } from "@/constants/interfaces";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Note: React.FC<{ note: NoteProps }> = ({ note }) => {
  return (
    <View style={styles.container}>
      <View style={styles.noteView}>
        <View style={styles.addNoteView}>
          <Button
            buttonStyle={styles.addNoteButton}
            icon={
              <FontAwesome6 name="plus" size={wp(1.5)} color={Colors.light} />
            }
          />
        </View>
        <View style={styles.note}>
          {note.image && (
            <View>
              <Image
                style={styles.image}
                source={require("@assets/images/temp/note.png")}
                accessibilityLabel={`note_${note.image.name}`}
              />
              <View style={styles.imageDesc}>
                <Text style={styles.imageName}>{note.image.name}</Text>
                <Button
                  buttonStyle={styles.imageDownload}
                  textStyle={styles.imageSize}
                  text={formatFileSize(note.image.size)}
                  icon={
                    <FontAwesome6
                      name="download"
                      size={wp(1.5)}
                      color={Colors.success}
                    />
                  }
                />
              </View>
            </View>
          )}
          {note.content && <Text style={styles.content}>{note.content}</Text>}
          {note.audio && (
            <AudioPlayer
              audioUri={
                "https://file-examples.com/storage/fef4e75e176737761a179bf/2017/11/file_example_MP3_5MG.mp3"
              }
              // onPlaybackStatusChange={handlePlaybackStatusChange}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Note;
