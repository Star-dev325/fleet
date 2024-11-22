import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { CheckListLayoutProps } from "@/constants/interfaces";
import { Modal } from "@/components/core";
import { Step } from "../step";
import { ObservationModal } from "../modal-observation";
import { CompleteModal } from "../modal-complete";
import { useCheckListContext } from "@/hooks/checklist.hook";
import styles from "./styles";

const CheckListLayout: React.FC<CheckListLayoutProps> = ({ children }) => {
  const {
    observationModalVisible,
    completeModalVisible,
    setCompleteModalVisible,
    setObservationModalVisible,
  } = useCheckListContext();

  return (
    <View style={styles.container}>
      <Step />
      {/* <Image
        style={styles.containerBg}
        source={require("@assets/images/checklist_bg.png")}
        accessibilityLabel="CheckList Background"
      /> */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.robotView}
          onPress={() => setObservationModalVisible(true)}
        >
          <Image
            style={styles.robot}
            source={require("@assets/images/robot.png")}
            accessibilityLabel="Robot"
          />
        </TouchableOpacity>
        <View style={styles.informationView}>{children}</View>
      </View>
      <Modal
        children={
          <ObservationModal onClose={() => setObservationModalVisible(false)} />
        }
        visible={observationModalVisible}
        onClose={() => setObservationModalVisible(false)}
      />
      <Modal
        children={
          <CompleteModal onClose={() => setCompleteModalVisible(false)} />
        }
        visible={completeModalVisible}
        onClose={() => setCompleteModalVisible(false)}
      />
    </View>
  );
};

export default CheckListLayout;
