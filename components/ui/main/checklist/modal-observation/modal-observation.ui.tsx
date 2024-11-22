import React from "react";
import { View } from "react-native";
import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";
import { ObservationModalProps } from "@/constants/interfaces";
import styles from "./styles";

const ObservationModal: React.FC<ObservationModalProps> = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header onClose={onClose} />
        <Content />
        <Footer />
      </View>
    </View>
  );
};

export default ObservationModal;
