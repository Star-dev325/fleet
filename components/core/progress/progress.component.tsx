import React from "react";
import { View } from "react-native";
import { ProgressProps } from "@/constants/interfaces";
import styles from "./styles";

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

export default Progress;
