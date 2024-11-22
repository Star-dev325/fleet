import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./styles";

const Splash: React.FC = () => {
  return (
    <SafeAreaProvider style={styles.safeContainer}>
      <ImageBackground
        style={styles.splashBG}
        source={require("@/assets/images/splash.png")}
        accessibilityLabel="Splash"
      />
    </SafeAreaProvider>
  );
};

export default Splash;
