import React from "react";
import { View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";
import { CheckboxProps } from "@/constants/interfaces";
import styles from "./styles";

const Checkbox: React.FC<CheckboxProps> = ({
  // checkedStyle,
  checkedBoxStyle,
  unCheckedBoxStyle,
  checkedColor,
  unCheckedColor,
  checked,
}) => {
  return (
    <View
      style={[
        styles.container,
        checkedBoxStyle,
        unCheckedBoxStyle,
        checkedColor,
        unCheckedColor,
      ]}
    >
      {checked ? (
        <FontAwesome6 name="check" size={wp(1)} color={checkedColor} />
      ) : (
        <FontAwesome6 name="" size={wp(1)} color={unCheckedColor} />
      )}
    </View>
  );
};

export default Checkbox;
