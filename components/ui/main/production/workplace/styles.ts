import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    gap: 4,
  },
  inlineText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
  pocketButtonGroup: {
    justifyContent: "center",
  },
  pocketButton: {
    width: "25%",
    margin: wp(0.2),
    padding: wp(0.5),
    backgroundColor: Colors.grey,
  },
  pocketText: {
    color: Colors.light,
    fontSize: fp(1.5),
  },
});

export default styles;
