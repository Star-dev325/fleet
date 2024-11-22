import React from "react";
import { View, Text, Image } from "react-native";
import { CompleteModalProps } from "@/constants/interfaces";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";
import { useRouter } from "expo-router";
import styles from "./styles";
import { Button, Progress } from "@/components/core";
import { useCheckListContext } from "@/hooks/checklist.hook";

const CompleteModal: React.FC<CompleteModalProps> = () => {
  const { setCompleteModalVisible } = useCheckListContext();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.congratulation}>Felicidades</Text>
        <Text style={styles.complete}>¡Checklist completo!</Text>
        <View style={styles.completeImage}>
          <FontAwesome6 name="check" size={wp(2)} color={Colors.white} />
        </View>
        <View style={styles.congratulationImageView}>
          <Image
            style={styles.congratulationImage}
            source={require("@assets/images/checklist_complete.png")}
            accessibilityLabel="CheckList Complete"
          />
        </View>
        <View style={styles.progressView}>
          <Progress progress={80} />
          <View style={styles.progressDesc}>
            <Button
              buttonStyle={[styles.checkButton]}
              icon={
                <FontAwesome6
                  name="check"
                  size={wp(1.2)}
                  color={Colors.success}
                />
              }
            />
            <Text style={styles.goodText}>{98}% Bien</Text>
            <View style={styles.dot} />
            <Button
              buttonStyle={[styles.unCheckButton]}
              icon={
                <FontAwesome6
                  name="xmark"
                  size={wp(1.2)}
                  color={Colors.danger}
                />
              }
            />
            <Text style={styles.evilText}>{2}% Mal</Text>
          </View>
        </View>
        <Button
          text="Continuar"
          icon={
            <FontAwesome6
              name="arrow-right"
              size={wp(1)}
              color={Colors.white}
            />
          }
          buttonStyle={styles.completeButton}
          textStyle={styles.completeText}
          onClickButton={() => {
            router.push("/(main)/production/start")
            setCompleteModalVisible(false)
          }}
        />
      </View>
    </View>
  );
};

export default CompleteModal;
