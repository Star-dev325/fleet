import React, { useState } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { PinInput, Button, Divider } from "@/components/core";
import { validatePincode } from "@/constants/validations/auth.validatoin";
import { AlertManager } from "@/constants/utils";
import { Colors, PASSWORD_INCORRECT } from "@/constants/shared";
import styles from "./styles";

const Login = () => {
  const router = useRouter();

  const [pin, setPin] = useState<string>("");

  const handlePinComplete = (pin: string): void => {
    setPin(pin);
  };

  const handleLogin = (): void => {
    if (!validatePincode(pin)) {
      AlertManager.error(PASSWORD_INCORRECT);
      return;
    }

    router.push("/(main)/checklist/dashboard");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.containerBG}
        source={require("@/assets/images/login_bg.png")}
        accessibilityLabel="Login Background"
      >
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require("@assets/images/logo/logo-blue.png")}
            accessibilityLabel="Logo"
          />
        </View>
        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>
            Ingrese su clave de{" "}
            <Text style={{ color: Colors.white, fontWeight: "bold" }}>
              inicio de sesión
            </Text>{" "}
            para acceder{"\n"}
            Recuerde no compartirla con nadie.
          </Text>
        </View>
        <View style={styles.pincodeView}>
          <PinInput length={8} onComplete={handlePinComplete} />
        </View>
        <View style={styles.loginBtnView}>
          <Button
            text="Verificar código"
            icon={
              <FontAwesome6
                name="arrow-right"
                size={wp(1)}
                color={Colors.white}
              />
            }
            buttonStyle={styles.loginBtn}
            textStyle={styles.loginBtnText}
            onClickButton={handleLogin}
          />
        </View>
        <View style={styles.dividerView}>
          <Divider
            dividerStyle={styles.dividerStyle}
            descriptionStyle={styles.descriptionStyle}
            description="o"
          />
        </View>
        <View style={styles.qrBtnView}>
          <Button
            text="Escanear QR"
            icon={
              <FontAwesome6
                name="arrow-right"
                size={wp(1)}
                color={Colors.white}
              />
            }
            buttonStyle={styles.qrBtn}
            textStyle={styles.qrText}
            onClickButton={handleLogin}
          />
        </View>
      </ImageBackground>
      {AlertManager.alertComponent()}
    </View>
  );
};

export default Login;
