import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { SearchBarProps } from "@/constants/interfaces/core.interface";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import styles from "./styles";
import { Colors } from "@/constants/shared";

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  style,
  placeholder,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(value??"");

  const handleChange = (val: string) => {
    setInputValue(val)
    onChange && onChange(val)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={style}
        onChangeText={(val: string) => handleChange(val)}
        value={inputValue}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
      />
      <View style={styles.searchBtn}>
        <FontAwesome6
          name="magnifying-glass"
          size={wp(1.3)}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

export default SearchBar;
