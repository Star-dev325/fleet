import React from "react";
import { Modal, View } from "react-native";
import { ModalProps } from "@/constants/interfaces";
import styles from "./styles";

const ModalWithBlur: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.container}>
        <View style={styles.overlay} />
        {children}
      </View>
    </Modal>
  );
};

export default ModalWithBlur;
