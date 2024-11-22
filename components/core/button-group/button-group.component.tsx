import React from "react";
import { View } from "react-native";
import { ButtonGroupProps } from "@/constants/interfaces/core.interface";
import styles from "./styles";
import Button from "../button/button.component";

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  icon,
  buttonGroupStyle,
  buttonStyle,
  textStyle,
  setCurrentValue
}) => {
  const [select, setSelect] = React.useState(0);
  return (
    <View style={[styles.container, buttonGroupStyle]}>
      {buttons.map((button, index) => (
        <Button
          key={`button_${index}`}
          text={button}
          onClickButton={() => {
            setCurrentValue(button)
            setSelect(index)
          }}
          icon={select === index && icon}
          buttonStyle={[buttonStyle, select === index && styles.selectButton]}
          textStyle={textStyle}
        />
      ))}
    </View>
  );
};

export default ButtonGroup;
