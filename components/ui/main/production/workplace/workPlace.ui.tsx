import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Button, ButtonGroup } from "@/components/core";
import { WORKSPACE_LIST, Colors } from "@/constants/shared";
import styles from "./styles";

const WorkPlace: React.FC = () => {
  const router = useRouter();
  const [selectedWorkspace, setSelectedWorkspace] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.inlineText}>
        <Text style={styles.headerText}>¿A dónde </Text>
        <Text style={styles.bodyText}> irás?</Text>
      </View>
      <View style={styles.inlineText}>
        <Text style={styles.labelText}>
          Especifique la ubicación donde trabajará
        </Text>
      </View>
      <View style={styles.inlineText}>
        <ButtonGroup
          buttons={WORKSPACE_LIST}
          currentValue={selectedWorkspace}
          setCurrentValue={setSelectedWorkspace}
          select={3}
          buttonGroupStyle={styles.pocketButtonGroup}
          buttonStyle={styles.pocketButton}
          textStyle={styles.pocketText}
          icon={
            <FontAwesome6 name="check" size={wp(1.5)} color={Colors.success} />
          }
        />
      </View>
      <View style={styles.inlineText}>
        <Button
          onClickButton={() => router.push("/(main)/production/parkingSetup")}
          text="Añadir ->"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
        />
      </View>
    </View>
  );
};

export default WorkPlace;
