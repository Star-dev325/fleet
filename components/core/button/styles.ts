import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(1),
    padding: wp(1),
  },
  iconText: {
    marginRight: wp(1),
  },
});

export default styles;
