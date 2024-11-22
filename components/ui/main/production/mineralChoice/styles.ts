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
  iconText: {
    color: Colors.white,
    textAlign: "center",
  },
  iconInactiveTextView: {
    backgroundColor: Colors.gray,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
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
  imageStyle: {
    padding: 20,
  },
  setupContext: {
    position: "relative",
    width: "auto",
    height: "auto",
    borderColor: Colors.success,
    minHeight: 220,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
  },
  setupInactiveContext: {
    position: "relative",
    width: "auto",
    height: "auto",
    alignItems: "center",
    paddingTop: 16,
    minHeight: 220,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
  },
  setupActiveContext: {
    position: "relative",
    width: "auto",
    height: "auto",
    alignItems: "center",
    paddingTop: 16,
    minHeight: 220,
    borderColor: Colors.success,
    borderWidth: 1,
    borderRadius: 20,
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
    marginTop: wp(2),
    backgroundColor: Colors.success,
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: fp(1.8),
  },
});

export default styles;
