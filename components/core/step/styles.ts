import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stepStatus: {
    backgroundColor: Colors.success,
    width: wp(2),
    height: wp(2),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(0.5),
    borderColor: Colors.success,
    borderWidth: 1,
  },
  stepCurrent: {
    backgroundColor: Colors.darkBlue,
  },
  stepDisable: {
    backgroundColor: Colors.charcoal,
    borderColor: Colors.dark,
  },
  line: {
    height: 1,
    width: "100%",
    position: "absolute",
    zIndex: -1,
    top: wp(1),
  },
  activeLine: {
    backgroundColor: Colors.success,
  },
  inactiveLine: {
    backgroundColor: Colors.dark,
  },
  stepActiveLabel: {
    fontSize: fp(1.2),
    color: "white",
    fontWeight: "bold",
    marginTop: wp(0.5),
  },
  stepInactiveLabel: {
    color: Colors.dark,
  },
});

export default styles;
