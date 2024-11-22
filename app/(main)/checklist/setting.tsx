import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "@/components/ui/header";
import { Colors } from "@/constants/shared";
import { CheckListLayout, Setting } from "@/components/ui/main/checklist";

const SettingScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <CheckListLayout>
        <Setting />
      </CheckListLayout>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGreen,
  },
});

export default SettingScreen;
