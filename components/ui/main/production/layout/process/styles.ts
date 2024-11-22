import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueGray,
    height: "100%",
    borderRadius: wp(1),
    padding: wp(1),
  },
  historyView: {
    flex: 1,
  },
  historyTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: wp(0.5),
  },
  historyText: {
    color: Colors.light,
    fontSize: fp(1.1),
  },
  scrollView: {
    flex: 1,
  },
});

export default styles;
