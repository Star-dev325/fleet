import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "50%",
    backgroundColor: Colors.black,
    borderRadius: wp(2),
    overflow: "hidden",
  },
});

export default styles;
