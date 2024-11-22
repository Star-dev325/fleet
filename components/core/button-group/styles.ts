import { StyleSheet } from "react-native";
import { Colors } from "@/constants/shared";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  selectButton: {
    borderColor: Colors.success,
    borderWidth: wp(0.1),
  },
});

export default styles;
