import React from "react";
import { View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Button } from "@/components/core";
import { Colors } from "@/constants/shared";
import { ObservationModalHeaderProps } from "@/constants/interfaces";
import styles from "./styles";

const Header: React.FC<ObservationModalHeaderProps> = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.toolView}>
        <Button
          onClickButton={onClose}
          buttonStyle={styles.toolButton}
          icon={
            <FontAwesome6
              name="chevron-left"
              size={wp(1)}
              color={Colors.white}
            />
          }
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Observaciones</Text>
        <Text style={styles.description}>
          Notas o comentarios adicionales sobre la revisión Evidencias
        </Text>
      </View>
      <View style={styles.toolView}>
        <Button
          buttonStyle={styles.toolButton}
          icon={
            <FontAwesome6
              name="magnifying-glass"
              size={wp(1)}
              color={Colors.white}
            />
          }
        />
      </View>
    </View>
  );
};

export default Header;
