import { StyleSheet } from "react-native";
import { Colors } from "@/constants/shared";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: wp(1),
    backgroundColor: Colors.danger,
    borderRadius: wp(1),
  },
  progress: {
    height: wp(1),
    backgroundColor: Colors.emeraldGreen,
    borderRadius: wp(1),
  },
});

export default styles;
