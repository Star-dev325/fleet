import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  orderText: {
    color: Colors.light,
    fontSize: fp(1.1),
    marginVertical: wp(0.8),
  },
  orderView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weightView: {
    width: "25%",
    backgroundColor: Colors.orange,
    borderWidth: wp(0.1),
    borderColor: Colors.warning,
    borderRadius: wp(1),
    paddingVertical: wp(0.6),
    alignItems: "center",
  },
  weightTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  weightText: {
    fontSize: fp(1),
    color: Colors.warning,
    marginLeft: wp(0.3),
  },
  weight: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.2),
  },
  detailView: {
    width: "73%",
    flexDirection: "row",
    borderRadius: wp(1),
    backgroundColor: Colors.grey,
    alignItems: "center",
    paddingHorizontal: wp(0.2),
  },
  detail: {
    flex: 1,
    alignItems: "center",
  },
  descText: {
    color: Colors.light,
    fontSize: fp(1),
  },
  desc: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.2),
  },
  map: {
    width: "100%",
    height: undefined,
    aspectRatio: 2.2,
    resizeMode: "contain",
    marginTop: wp(0.3),
  },
});

export default styles;
