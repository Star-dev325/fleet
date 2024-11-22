import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    width:50,
    height:50,
    backgroundColor: Colors.success
  },
  content: {
    width: "30%",
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    borderRadius: wp(2),
    padding: wp(1.5),
  },
  congratulation: {
    color: Colors.white,
    fontSize: fp(1.5),
    fontWeight: "bold",
  },
  complete: {
    color: Colors.emeraldGreen,
    fontSize: fp(2.2),
    fontWeight: "bold",
  },
  completeImage: {
    padding: wp(1),
    backgroundColor: Colors.emeraldGreen,
    borderRadius: wp(1),
    marginTop: wp(1),
  },
  congratulationImageView: {
    width: "60%",
  },
  congratulationImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  progressView: {
    width: "70%",
    marginBottom: wp(1.5),
  },
  progressDesc: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp(1),
  },
  goodText: {
    fontSize: fp(1.3),
    fontWeight: "bold",
    color: Colors.emeraldGreen,
  },
  evilText: {
    fontSize: fp(1.3),
    fontWeight: "bold",
    color: Colors.danger,
  },
  checkButton: {
    padding: wp(0.3),
    backgroundColor: Colors.tealGreen,
    borderColor: Colors.emeraldGreen,
    borderRadius: wp(0.5),
    borderWidth: wp(0.1),
    marginRight: wp(0.5),
  },
  unCheckButton: {
    padding: wp(0.3),
    backgroundColor: Colors.red,
    borderColor: Colors.danger,
    borderRadius: wp(0.5),
    borderWidth: wp(0.1),
    marginRight: wp(0.5),
  },
  dot: {
    width: wp(0.5),
    height: wp(0.5),
    backgroundColor: Colors.dark,
    borderRadius: wp(1),
    marginHorizontal: wp(1),
  },
  completeButton: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.success,
  },
  completeText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.5),
  },
});

export default styles;
