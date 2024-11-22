import React from "react";
import { View } from "react-native";
import { ProductionLayoutProps } from "@/constants/interfaces";
import { Step } from "./step";
import { Content } from "./content";
import { Process } from "./process";
import styles from "./styles";

const ProductionLayout: React.FC<ProductionLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.processView}>
        <Process />
      </View>
      <View style={styles.contentView}>
        <Step />
        <Content>{children}</Content>
      </View>
    </View>
  );
};

export default ProductionLayout;
