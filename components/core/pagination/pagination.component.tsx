import React from "react";
import { View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Button } from "../button";
import { PaginationProps } from "@/constants/interfaces";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Pagination: React.FC<PaginationProps> = ({
  paginationStyle,
  pageSize,
  total,
  current,
  onBefore,
  onNext,
}) => {
  const pageLength = Math.ceil(total / pageSize);

  const onClickBefore = () => {
    if (current > 0 && onBefore) {
      onBefore();
    }
  };

  const onClickNext = () => {
    if (current < pageLength - 1 && onNext) {
      onNext();
    }
  };

  return (
    <>
      {pageLength > 1 && (
        <View style={[styles.container, paginationStyle]}>
          <Button
            onClickButton={onClickBefore}
            icon={
              <FontAwesome6
                name="chevron-left"
                size={wp(1.2)}
                color={Colors.white}
              />
            }
          />
          {Array.from({ length: pageLength }, (_, index) => (
            <View
              key={`pageBar_${index}`}
              style={[
                styles.pageBar,
                current === index && { backgroundColor: Colors.success },
              ]}
            />
          ))}
          <Button
            onClickButton={onClickNext}
            icon={
              <FontAwesome6
                name="chevron-right"
                size={wp(1.2)}
                color={Colors.white}
              />
            }
          />
        </View>
      )}
    </>
  );
};

export default Pagination;
