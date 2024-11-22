import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: wp(0.5),
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: wp(0.5),
  },
  disable: {
    backgroundColor: "transparent",
  },
  icon: {
    width: "100%",
    resizeMode: "contain",
    display: "none",
  },
});

export default styles;
