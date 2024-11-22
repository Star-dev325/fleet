import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Pressable } from "react-native";
import { Text } from "react-native";
import styles from "./styles";
import {
  BoxProps,
  PinCodeInputProps,
} from "@/constants/interfaces/core.interface";

const Box: React.FC<BoxProps> = ({ isFilled, isFocused, value, secure }) => (
  <View
    style={[
      styles.box,
      isFocused && styles.boxFocused,
      isFilled && styles.boxFilled,
    ]}
  >
    <Text style={styles.boxText}>{isFilled ? (secure ? "*" : value) : ""}</Text>
  </View>
);

const PinCodeInput: React.FC<PinCodeInputProps> = ({
  length = 6,
  onComplete,
  secure = true,
}) => {
  const [code, setCode] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {}, [focused]);

  const handlePress = (): void => {
    inputRef.current?.focus();
    setFocused(true);
  };

  const handleChange = (text: string): void => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (numericText.length <= length) {
      setCode(numericText);
      if (numericText.length === length && onComplete) {
        onComplete(numericText);
      }
    }
  };

  const renderBoxes = (): React.ReactNode[] => {
    const boxes: React.ReactNode[] = [];
    for (let i = 0; i < length; i++) {
      const isFilled = i < code.length;
      boxes.push(
        <Box
          key={i}
          isFilled={isFilled}
          isFocused={focused && i === code.length}
          value={code[i]}
          secure={secure && i !== code.length - 1}
        />
      );
    }
    return boxes;
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.boxesContainer}>{renderBoxes()}</View>
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={handleChange}
        keyboardType="numeric"
        maxLength={length}
        style={styles.hiddenInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus
      />
    </Pressable>
  );
};

export default PinCodeInput;
