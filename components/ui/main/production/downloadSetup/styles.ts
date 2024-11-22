import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    gap: 8,
  },
  inlineText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconStyle: {
    width: 150,
    height: 200,
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
  iconText: {
    color: Colors.white,
    textAlign: "center",
  },
  iconActiveTextView: {
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
  iconInactiveText: {
    color: Colors.white,
    textAlign: "center",
  },
  imageStyle: {},
  setupContext: {
    position: "relative",
    width: "auto",
    height: "auto",
    marginLeft: 20,
  },
  setupInactiveContext: {
    position: "relative",
    width: "auto",
    height: "auto",
    alignItems: "center",
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
  },
  headerText: {
    color: Colors.white,
    fontSize: fp(3),
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
    backgroundColor: Colors.success,
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: fp(1.8),
  },
});

export default styles;
