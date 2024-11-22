import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "@/components/ui/header";
import { Colors } from "@/constants/shared";
import { Tracker } from "@/components/ui/main/production";

const TrackerScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <Tracker />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charcoal,
  },
});

export default TrackerScreen;
