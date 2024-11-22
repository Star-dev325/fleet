import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flex: 1,
    height: wp(0.1),
    backgroundColor: Colors.dark,
  },
  right: {
    flex: 1,
    height: wp(0.1),
    backgroundColor: Colors.dark,
  },
  sperator: {
    marginHorizontal: wp(1),
  },
});

export default styles;
