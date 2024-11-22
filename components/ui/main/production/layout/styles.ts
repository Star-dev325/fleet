import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: wp(1),
  },
  processView: {
    flex: 1,
  },
  contentView: {
    flex: 3,
    marginLeft: wp(1),
  },
});

export default styles;
