import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp(1),
  },
  informationView: {
    justifyContent: "center",
    alignItems: "center",
  },
  informationTitle: {
    color: Colors.white,
    fontSize: fp(2),
    fontWeight: "bold",
  },
  informationDescription: {
    color: Colors.light,
    fontSize: fp(1.3),
    textAlign: "center",
    marginBottom: wp(1),
  },
  pocketView: {
    flexDirection: "row",
    width: "40%",
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
  statisticView: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statistic: {
    width: "49%",
    alignItems: "center",
    marginVertical: wp(0.5),
  },
  hoursView: {
    flexDirection: "row",
  },
  hours: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(5),
  },
  unit: {
    color: Colors.danger,
    fontWeight: "bold",
    fontSize: fp(3),
    marginLeft: wp(0.3),
  },
  statisticControlView: {
    width: "100%",
    flexDirection: "row",
  },
  hoursPlusButton: {
    flex: 1,
    marginRight: wp(0.2),
    backgroundColor: Colors.success,
  },
  hoursMinusButton: {
    flex: 1,
    marginLeft: wp(0.2),
    backgroundColor: Colors.gray,
  },
  hoursPlusText: {
    color: Colors.white,
    fontSize: fp(1.5),
  },
  checkListButtonView: {
    width: "100%",
    marginTop: wp(1),
    alignItems: "center",
  },
  checkListButton: {
    paddingHorizontal: wp(4),
    backgroundColor: Colors.success,
  },
  checkListText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.3),
  },
});

export default styles;
