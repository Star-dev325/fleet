import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    gap: 5,
  },
  inlineText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  amountInline: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  iconStyle: {
    width: 110,
    height: 140,
  },
  iconInactiveStyle: {
    width: 110,
    height: 100,
  },
  iconTextView: {
    backgroundColor: Colors.success,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  headerText: {
    color: Colors.white,
    fontSize: fp(3),
    fontWeight: "bold",
  },
  amountText: {
    color: Colors.white,
    fontSize: fp(8),
    fontWeight: "bold",
  },
  unitText: {
    color: "#F43F5E",
    fontSize: fp(5),
    fontWeight: "bold",
  },
  bodyText: {
    color: Colors.success,
    fontSize: fp(3),
    fontWeight: "bold",
  },
  labelText: {
    color: Colors.gray,
    fontSize: fp(2),
  },
  timeText: {
    color: Colors.white,
    fontSize: fp(8),
    fontWeight: "bold",
  },
  timeFormat: {
    color: Colors.orange,
    fontSize: fp(8),
    fontWeight: "bold",
  },
  buttonStyle: {
    width: 200,
    height: 40,
    marginTop: wp(2),
    backgroundColor: Colors.success,
  },
  buttonMinusStyle: {
    width: 200,
    height: 40,
    marginTop: wp(2),
    marginLeft: 20,
    backgroundColor: Colors.gray,
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: fp(1.8),
  },
});

export default styles;
