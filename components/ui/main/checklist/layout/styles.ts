import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // containerBg: {
  //   width: "100%",
  //   height: 300,
  //   resizeMode: "stretch",
  // },
  content: {
    position: "absolute",
    flexDirection: "row",
    marginTop: wp(4),
  },
  robotView: {
    width: "20%",
    position: "absolute",
    alignItems: "center",
    top: wp(4),
  },
  robot: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  informationView: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    marginTop: wp(1),
  },
});

export default styles;
