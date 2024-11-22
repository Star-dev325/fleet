import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wp(0.3),
  },
  dayView: {
    flex: 1,
    paddingTop: wp(0.8),
    paddingBottom: wp(0.5),
    borderRadius: wp(1),
    backgroundColor: Colors.charcoal,
    alignItems: "center",
  },
  selectDayView: {
    backgroundColor: Colors.grey,
    borderWidth: wp(0.1),
    borderColor: Colors.light,
  },
  day: {
    color: Colors.light,
    fontSize: fp(0.8),
  },
  date: {
    color: Colors.light,
    fontSize: fp(1.2),
    fontWeight: "bold",
    marginVertical: wp(0.5),
  },
  selectDate: {
    color: Colors.white,
    fontWeight: "bold",
  },
  dot: {
    width: wp(0.5),
    height: wp(0.5),
    borderRadius: wp(0.5),
    backgroundColor: Colors.success,
  },
});

export default styles;
