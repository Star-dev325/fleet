import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.green,
    paddingHorizontal: wp(0.5),
    paddingVertical: wp(1.3),
  },
  toolView: {
    flex: 1,
    alignItems: "center",
  },
  toolButton: {
    width: wp(3.5),
    height: undefined,
    aspectRatio: 1,
    backgroundColor: Colors.black,
  },
  titleView: {
    flex: 8,
  },
  title: {
    color: Colors.white,
    fontSize: fp(1.3),
    fontWeight: "bold",
  },
  description: {
    color: Colors.light,
    fontSize: fp(1.1),
  },
});

export default styles;
