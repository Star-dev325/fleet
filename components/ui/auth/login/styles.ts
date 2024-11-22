import { Colors } from "@/constants/shared";
import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkGreen,
  },
  containerBG: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
  logoView: {
    alignItems: "center",
  },
  logo: {
    width: "15%",
    resizeMode: "contain",
  },
  loginTextView: {
    justifyContent: "center",
  },
  loginText: {
    color: Colors.gray,
    textAlign: "center",
    fontSize: fp(1.5),
  },
  pincodeView: {
    marginVertical: wp(2),
  },
  loginBtnView: {
    alignItems: "center",
  },
  loginBtn: {
    width: "25%",
    alignItems: "center",
    backgroundColor: Colors.success,
  },
  loginBtnText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.3),
  },
  qrBtnView: {
    alignItems: "center",
  },
  qrBtn: {
    width: "25%",
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
  },
  qrText: {
    color: Colors.success,
    fontWeight: "bold",
    fontSize: fp(1.3),
  },
  dividerView: {
    alignItems: "center",
    marginVertical: wp(1),
  },
  dividerStyle: {
    width: "35%",
  },
  descriptionStyle: {
    color: Colors.white,
    fontSize: fp(1.5),
  },
});

export default styles;
