import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Button } from "@/components/core";
import { CompleteModalProps } from "@/constants/interfaces";
import styles from "./styles";

const ProductionModal: React.FC<CompleteModalProps> = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.congratulation}>¡Ciclo de carguío</Text>
        <Text style={styles.congratulation}>terminado con éxito!</Text>
        <View style={styles.congratulationImageView}>
          <Image
            style={styles.congratulationImage}
            source={require("@assets/images/production_complete.png")}
            accessibilityLabel="Production Complete"
          />
        </View>
        <Button
          icon={<FontAwesome6 name="play" size={24} color="white" />}
          buttonStyle={styles.playButton}
          onClickButton={() => router.push("/(main)/production/start")}
        />
      </View>
    </View>
  );
};

export default ProductionModal;
