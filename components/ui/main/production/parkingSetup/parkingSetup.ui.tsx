import React from "react";
import { View, Text, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/core";
import styles from "./styles";

const ParkingSetup: React.FC = () => {
  const router = useRouter();
  const { user, from } = useLocalSearchParams();
  const [isInQueue, setIsInQueue] = React.useState(false);

  const handleContinue = () => {
    if (!isInQueue) {
      setIsInQueue(true);
    } else {
      if (from === "download") {
        router.push("/(main)/production/downloadAmount");
      } else {
        router.push("/(main)/production/loading");
      }
    }
  };
  return (
    <View style={styles.container}>
      {isInQueue ? (
        <View style={styles.inlineText}>
          <Text style={styles.headerText}>Espera en</Text>
          <Text style={styles.bodyText}> cola</Text>
        </View>
      ) : (
        <View style={styles.inlineText}>
          <Text style={styles.headerText}>Elija su</Text>
          <Text style={styles.bodyText}> acción</Text>
        </View>
      )}
      {isInQueue ? (
        <View style={styles.inlineText}>
          <Text style={styles.labelText}>¿Finalizó su espera en la cola?</Text>
        </View>
      ) : (
        <View style={styles.inlineText}>
          <Text style={styles.labelText}>
            ¿Estás esperando o buscando dónde estacionar?
          </Text>
        </View>
      )}
      {isInQueue ? (
        <View style={styles.inlineText}>
          <View style={styles.setupActiveContext}>
            <View style={styles.imageStyle}>
              <Image
                style={styles.iconInactiveStyle}
                source={require("@/assets/images/parkingSetupActive.png")}
              ></Image>
            </View>
            <View style={styles.iconActiveTextView}>
              <Text style={styles.iconInactiveText}>Estacionar</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.inlineText}>
          <View style={styles.setupContext}>
            <View style={styles.imageStyle}>
              <Image
                style={styles.iconStyle}
                source={require("@/assets/images/parkingSetupInQueue.png")}
              ></Image>
            </View>
            <View style={styles.iconTextView}>
              <Text style={styles.iconText}>En Cola</Text>
            </View>
          </View>
          <View style={styles.setupInactiveContext}>
            <View style={styles.imageStyle}>
              <Image
                style={styles.iconInactiveStyle}
                source={require("@/assets/images/parkingSetupInactive.png")}
              ></Image>
            </View>
            <View style={styles.iconInactiveTextView}>
              <Text style={styles.iconInactiveText}>Estacionar</Text>
            </View>
          </View>
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

export default ParkingSetup;
