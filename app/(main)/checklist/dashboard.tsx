import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CheckListLayout, Dashboard } from "@/components/ui/main/checklist";
import { Header } from "@/components/ui/header";
import { Colors } from "@/constants/shared";

const DashboardScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <CheckListLayout>
        <Dashboard />
      </CheckListLayout>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charcoal,
  },
});

export default DashboardScreen;
