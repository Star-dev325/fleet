import React from "react";
import { Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { StepProps } from "@/constants/interfaces";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Step: React.FC<StepProps> = ({ steps, current }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View
            style={[
              styles.line,
              index <= current ? styles.activeLine : styles.inactiveLine,
            ]}
          />
          <View
            style={[
              styles.stepStatus,
              index === current && styles.stepCurrent,
              index > current && styles.stepDisable,
            ]}
          >
            <FontAwesome
              name="check"
              size={wp(1)}
              color={
                index < current
                  ? "white"
                  : index == current
                  ? Colors.success
                  : Colors.dark
              }
            />
          </View>
          <Text
            style={[
              styles.stepActiveLabel,
              index > current && styles.stepInactiveLabel,
            ]}
          >
            {step}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Step;
