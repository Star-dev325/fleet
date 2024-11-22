import React from "react";
import { View, Text } from "react-native";
import { DividerProps } from "@/constants/interfaces/core.interface";
import styles from "./styles";

const Divier: React.FC<DividerProps> = ({
  dividerStyle,
  descriptionStyle,
  description,
}) => {
  return (
    <View style={[styles.container, dividerStyle]}>
      <View style={styles.left} />
      <Text style={[styles.sperator, descriptionStyle]}>{description}</Text>
      <View style={styles.right} />
    </View>
  );
};

export default Divier;
