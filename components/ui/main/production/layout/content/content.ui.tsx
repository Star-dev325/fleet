import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { ProductionContentProps } from "@/constants/interfaces";
import styles from "./styles";

const Content: React.FC<ProductionContentProps> = ({ children }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.rect1} />
      <View style={styles.rect2} />
      <View style={styles.content}>
        <View style={styles.clip} />
        <TouchableOpacity
          style={styles.robotView}
          onPress={() => router.push("/(main)/production/tracker")}
        >
          <Image
            style={styles.robot}
            source={require("@assets/images/robot_1.png")}
            accessibilityLabel="Production Robot"
          />
        </TouchableOpacity>
        <Image
          style={styles.bg}
          source={require("@assets/images/production_bg.png")}
        />
        {children}
      </View>
    </View>
  );
};

export default Content;
