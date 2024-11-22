import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "1%",
    alignItems: "center",
  },
  rect1: {
    width: "80%",
    height: wp(10),
    backgroundColor: Colors.dark,
    borderRadius: wp(1),
    resizeMode: "contain",
    position: "absolute",
  },
  rect2: {
    width: "90%",
    height: wp(10),
    backgroundColor: Colors.grey,
    borderRadius: wp(1),
    resizeMode: "contain",
    position: "absolute",
    top: "2%",
  },
  content: {
    width: "100%",
    height: "95%",
    backgroundColor: Colors.darkGreen,
    borderRadius: wp(2),
    top: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  clip: {
    width: "5%",
    height: wp(0.3),
    borderRadius: wp(1),
    backgroundColor: Colors.blueGray,
    position: "absolute",
    left: "50%",
    top: wp(0.5),
    transform: [{ translateX: -0.5 * wp(5) }],
  },
  robotView: {
    width: "10%",
    position: "absolute",
    justifyContent: "flex-end",
    left: 0,
    bottom: 0,
  },
  robot: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: wp(1),
    marginLeft: wp(1),
  },
  bg: {
    width: "69%",
    height: "85%",
    resizeMode: "contain",
    position: "absolute",
  },
});

export default styles;
