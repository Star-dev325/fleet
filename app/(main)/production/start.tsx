import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "@/components/ui/header";
import { Colors } from "@/constants/shared";
import { ProductionLayout, Start } from "@/components/ui/main/production";

const StartScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <ProductionLayout>
        <Start />
      </ProductionLayout>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charcoal,
  },
});

export default StartScreen;
