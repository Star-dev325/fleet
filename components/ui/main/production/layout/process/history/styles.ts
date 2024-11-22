import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charcoal,
    borderRadius: wp(1),
    marginBottom: wp(0.5),
    padding: wp(0.8),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  metalImage: {
    borderRadius: wp(0.8),
    alignItems: "center",
    justifyContent: "center",
    padding: wp(0.8),
    marginRight: wp(0.8),
  },
  metalIcon: {
    width: wp(2),
    height: wp(2),
  },
  historyView: {
    flex: 1,
  },
  workView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  workTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  workText: {
    color: Colors.white,
    fontSize: fp(1.3),
    fontWeight: "bold",
  },
  workIcon: {
    marginHorizontal: wp(0.5),
  },
  timeView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: wp(0.2),
  },
  timeText: {
    color: Colors.light,
    fontSize: fp(1),
    marginLeft: wp(0.3),
  },
  dot: {
    width: wp(0.3),
    height: wp(0.3),
    backgroundColor: Colors.light,
    borderRadius: wp(0.3),
    marginHorizontal: wp(0.5),
  },
  timeline: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  timelineText: {
    color: Colors.light,
    fontSize: fp(1),
  },
});

export default styles;
