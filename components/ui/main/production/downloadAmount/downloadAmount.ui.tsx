import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@/components/core";
import { useRouter } from "expo-router";
import styles from "./styles";

const DownloadAmount: React.FC = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(42.0);

  const handleContinue = () => {
    router.push("/(main)/production/downloadSetup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inlineText}>
        <Text style={styles.headerText}>Ubicación y</Text>
        <Text style={styles.bodyText}> Cantidad</Text>
      </View>
      <View style={styles.inlineText}>
        <Text style={styles.labelText}>
          Seleccione la ubicación e ingrese la cantidad cargada.
        </Text>
      </View>

      <View style={styles.amountInline}>
        <Text style={styles.amountText}>{amount.toFixed(1)}</Text>
        <Text style={styles.unitText}> tn</Text>
      </View>

      <View style={styles.inlineText}>
        <Button
          text="+"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onClickButton={()=> setAmount(amount + 0.1)}
        />
        <Button
          text="-"
          buttonStyle={styles.buttonMinusStyle}
          textStyle={styles.buttonTextStyle}
          onClickButton={()=> setAmount(amount - 0.1)}
        />
      </View>
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

export default DownloadAmount;
