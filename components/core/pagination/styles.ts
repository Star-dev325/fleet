import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: wp(0.8),
  },
  pageBar: {
    flex: 1,
    height: wp(0.5),
    borderRadius: wp(1),
    backgroundColor: Colors.gray,
  },
});

export default styles;
