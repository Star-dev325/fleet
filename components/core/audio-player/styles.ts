import { Colors } from "@/constants/shared";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    height: wp(4),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp(1),
    backgroundColor: Colors.midLightGreen,
  },
  waveformContainer: {
    flex: 1,
    paddingHorizontal: wp(1),
  },
  waveform: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: wp(0.3),
    overflow: "hidden",
  },
  bar: {
    width: wp(0.2),
    backgroundColor: Colors.white,
    borderRadius: wp(1),
  },
  time: {
    color: Colors.white,
    fontSize: fp(1.5),
    fontWeight: "bold",
  },
});

export default styles;
