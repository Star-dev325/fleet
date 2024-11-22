import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";

const MineralChoice: React.FC = () => {
  const router = useRouter();
  const [selectedMineral, setSelectedMineral] = React.useState("");
  const handleContinue = (mineralType: string) => {
    setSelectedMineral(mineralType);
    router.push("/(main)/production/downloadPlace");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inlineText}>
        <Text style={styles.headerText}>Tipo de</Text>
        <Text style={styles.bodyText}> Material</Text>
      </View>
      <View style={styles.inlineText}>
        <Text style={styles.labelText}>Especifique el el tipo de materia</Text>
      </View>
      <View style={styles.inlineText}>
        <TouchableOpacity onPress={() => handleContinue("mineral")}>
          <View style={styles.setupContext}>
            <View style={styles.imageStyle}>
              <Image
                style={styles.iconStyle}
                source={require("@/assets/images/mineral.png")}
              ></Image>
            </View>
            <View style={styles.iconTextView}>
              <Text style={styles.iconText}>Mineral</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleContinue("sand")}>
          <View style={styles.setupInactiveContext}>
            <View style={styles.imageStyle}>
              <Image
                style={styles.iconInactiveStyle}
                source={require("@/assets/images/sand.png")}
              ></Image>
            </View>
            <View style={styles.iconInactiveTextView}>
              <Text style={styles.iconInactiveText}>Desmonte</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MineralChoice;
