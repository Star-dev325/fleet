import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
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
  playButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.success,
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
});

export default styles;
