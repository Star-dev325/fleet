import React from "react";
import { View, Text, Modal } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AlertProps, AlertType } from "@/constants/interfaces/core.interface";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Alert: React.FC<AlertProps> = ({ visible, type, message, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.container,
            type === AlertType.SUCCESS
              ? styles.successBg
              : type === AlertType.WARNING
              ? styles.warningBg
              : styles.errorBg,
          ]}
        >
          {type === AlertType.SUCCESS ? (
            <FontAwesome6
              name="circle-check"
              size={wp(1.5)}
              color={Colors.white}
            />
          ) : type === AlertType.WARNING ? (
            <FontAwesome6
              name="circle-exclamation"
              size={wp(1.5)}
              color={Colors.white}
            />
          ) : (
            <FontAwesome6
              name="circle-xmark"
              size={wp(1.5)}
              color={Colors.white}
            />
          )}
          <Text style={styles.message}>
            {type}: {message}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
