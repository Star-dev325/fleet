import React, { createContext, useState, ReactNode, useContext } from "react";
import { CheckListContextType } from "@/constants/interfaces";

export const CheckListContext = createContext<CheckListContextType | undefined>(
  undefined
);

export const useCheckListContext = (): CheckListContextType => {
  const context = useContext(CheckListContext);
  if (!context) {
    throw new Error(
      "useCheckListContext must be used within an CheckListProvider"
    );
  }
  return context;
};

export const CheckListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [observationModalVisible, setObservationModalVisible] =
    useState<boolean>(false);

  const [completeModalVisible, setCompleteModalVisible] =
    useState<boolean>(false);

  return (
    <CheckListContext.Provider
      value={{
        observationModalVisible,
        completeModalVisible,
        setObservationModalVisible,
        setCompleteModalVisible,
      }}
    >
      {children}
    </CheckListContext.Provider>
  );
};
