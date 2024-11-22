import React from "react";
import { View, Text } from "react-native";
import { Button } from "@/components/core";
import { Image } from "react-native";
import { Modal } from "@/components/core";
import { ProductionModal } from "../../checklist/production-complete";
import styles from "./styles";

const DownloadSetup: React.FC = () => {
  const [isInQueue, setIsInQueue] = React.useState(false);
  const [completeModalVisible, setCompleteModalVisible] = React.useState(false);
  const handleContinue = () => {
    if (!isInQueue) {
      setIsInQueue(true);
    } else {
      setCompleteModalVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inlineText}>
        <Text style={styles.bodyText}>Descargando</Text>
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
            source={require("@/assets/images/downloadCompleted.png")}
          ></Image>
        </View>
      ) : (
        <View style={styles.inlineText}>
          <Image
            style={styles.iconStyle}
            source={require("@/assets/images/downloadInQueue.png")}
          ></Image>
          <Image
            style={styles.iconStyle}
            source={require("@/assets/images/downloadInactive.png")}
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
      <Modal
        children={
          <ProductionModal onClose={() => setCompleteModalVisible(false)} />
        }
        visible={completeModalVisible}
        onClose={() => setCompleteModalVisible(false)}
      />
    </View>
  );
};

export default DownloadSetup;
