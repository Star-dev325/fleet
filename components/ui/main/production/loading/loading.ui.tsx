import React from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/core";
import styles from "./styles";

const Loading: React.FC = () => {
  const router = useRouter();
  const [isInQueue, setIsInQueue] = React.useState(false);
  const handleContinue = () => {
    if (!isInQueue) {
      setIsInQueue(true);
    } else {
      router.push("/(main)/production/mineralChoice");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inlineText}>
        <Text style={styles.bodyText}>Cargando</Text>
      </View>
      <View style={styles.inlineText}>
        <Text style={styles.labelText}>
          Registra el inicio y fin de la carga
        </Text>
      </View>
      {isInQueue ? (
        <View style={styles.inlineText}>
          <Image
            style={styles.iconStyle}
            source={require("@/assets/images/loadingCompleted.png")}
          ></Image>
        </View>
      ) : (
        <View style={styles.inlineText}>
          <Image
            style={styles.iconStyle}
            source={require("@/assets/images/loadingInQueue.png")}
          ></Image>
          <Image
            style={styles.iconStyle}
            source={require("@/assets/images/loadingInactive.png")}
          ></Image>
        </View>
      )}

      <View style={styles.inlineText}>
        <Button
          onClickButton={handleContinue}
          text="Continuar ->"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
        />
      </View>
    </View>
  );
};

export default Loading;
