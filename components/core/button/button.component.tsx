import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { ButtonProps } from "@/constants/interfaces/core.interface";
import styles from "./styles";

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  buttonStyle,
  textStyle,
  disabled = false,
  onClickButton,
}) => {
  return (
    <TouchableOpacity
      onPress={onClickButton}
      style={[styles.container, buttonStyle]}
      disabled={disabled}
    >
      {text && (
        <Text style={[textStyle, icon ? styles.iconText : null]}>{text}</Text>
      )}
      {icon && icon}
    </TouchableOpacity>
  );
};

export default Button;
