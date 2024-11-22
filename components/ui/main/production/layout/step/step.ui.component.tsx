import React from "react";
import { View } from "react-native";
import { Step } from "@components/core";

const ProductionStep: React.FC = () => {
  const stepLabels = Array.from({ length: 9 }, (_, index) => {
    return `Paso ${index + 1}`;
  });
  return (
    <View>
      <Step steps={stepLabels} current={3} />
    </View>
  );
};

export default ProductionStep;
