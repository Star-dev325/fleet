import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepIndex: {
    fontSize: fp(2),
    color: Colors.white,
    fontWeight: "bold",
  },
  title: {
    fontSize: fp(2),
    color: Colors.success,
    fontWeight: "bold",
  },
  descView: {},
  desc: {
    fontSize: fp(1.3),
    color: Colors.light,
  },
  optionContent: {
    width: "40%",
    marginVertical: wp(1),
  },
  optionView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: wp(0.5),
  },
  optionNameView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: wp(2),
  },
  optionName: {
    fontSize: fp(1.3),
    color: Colors.white,
    fontWeight: "semibold",
    marginLeft: wp(0.8),
  },
  optionCheckView: {
    flexDirection: "row",
  },
  checkButton: {
    width: wp(2.5),
    height: wp(2.5),
    backgroundColor: Colors.tealGreen,
    borderRadius: wp(0.5),
    marginRight: wp(0.5),
    padding: wp(0),
  },
  unCheckButton: {
    width: wp(2.5),
    height: wp(2.5),
    backgroundColor: Colors.danger,
    borderRadius: wp(0.5),
    padding: wp(0),
  },
  paginationView: {
    flex: 1,
    alignItems: "center",
  },
  pagination: {
    width: "70%",
  },
  continueButtonView: {
    flex: 1,
    alignItems: "center",
  },
  continueButton: {
    width: "50%",
    backgroundColor: Colors.success,
  },
  continueText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.3),
  },
});

export default styles;
