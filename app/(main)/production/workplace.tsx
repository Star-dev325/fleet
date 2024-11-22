import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "@/components/ui/header";
import { Colors } from "@/constants/shared";
import { ProductionLayout, WorkPlace } from "@/components/ui/main/production";

const WorkPlaceScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <ProductionLayout>
        <WorkPlace />
      </ProductionLayout>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charcoal,
  },
});

export default WorkPlaceScreen;
