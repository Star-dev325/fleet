import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  boxesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(2),
    backgroundColor: Colors.charcoal,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: wp(0.2),
    borderColor: Colors.dark,
    margin: wp(0.5),
  },
  boxFocused: {
    borderColor: Colors.success,
    borderWidth: wp(0.2),
  },
  boxFilled: {
    borderColor: Colors.success,
    borderWidth: wp(0.2),
    backgroundColor: Colors.darkBlue,
  },
  boxText: {
    fontSize: fp(3),
    color: Colors.white,
    fontWeight: "bold",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});

export default styles;
