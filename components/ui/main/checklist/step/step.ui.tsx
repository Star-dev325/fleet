import React from "react";
import { View } from "react-native";
import { Step } from "@components/core";
import { CHECKLIST_STEP } from "@/constants/shared/constants.share";

const CheckListStep: React.FC = () => {
  return (
    <View>
      <Step steps={CHECKLIST_STEP} current={4} />
    </View>
  );
};

export default CheckListStep;
