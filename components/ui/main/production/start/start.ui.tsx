import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button } from "@/components/core";
import styles from "./styles";

const Start: React.FC = () => {
  const router = useRouter();
  function formatAMPM(date: any) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes;
    return {strTime,ampm};
  }
  return (
    <View style={styles.container}>
      <View style={styles.inlineText}>
        <Text style={styles.headerText}>¡Listo para partir,</Text>
        <Text style={styles.bodyText}> vamos!</Text>
      </View>
      <View style={styles.inlineText}>
        <Text style={styles.labelText}>
          Al hacer clic en el botón, comenzará su viaje
        </Text>
      </View>
      <View style={styles.inlineText}>
        <Text style={styles.timeText}>{formatAMPM(new Date()).strTime}</Text>
        <Text style={styles.timeFormat}> {formatAMPM(new Date()).ampm.toUpperCase()}</Text>
      </View>
      <View style={styles.inlineText}>
        <Button
          icon={<FontAwesome6 name="play" size={wp(2)} color="white" />}
          buttonStyle={styles.playButton}
          onClickButton={() => router.push("/(main)/production/workplace")}
        ></Button>
      </View>
    </View>
  );
};

export default Start;
