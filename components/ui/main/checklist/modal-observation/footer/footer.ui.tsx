import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import { Button } from "@/components/core";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Footer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission to access the camera is required.");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("An error occurred while opening the camera: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatView}>
        <Button
          onClickButton={openCamera}
          buttonStyle={styles.cameraButton}
          icon={
            <FontAwesome6 name="camera" size={wp(1.3)} color={Colors.white} />
          }
        />
        <TextInput
          style={styles.chat}
          placeholder="Introduzca texto."
          placeholderTextColor={Colors.gray}
        />
      </View>
      <View>
        <Button
          buttonStyle={styles.sendButton}
          icon={
            <FontAwesome6
              name="paper-plane"
              size={wp(1.3)}
              color={Colors.white}
            />
          }
        />
      </View>
    </View>
  );
};

export default Footer;
