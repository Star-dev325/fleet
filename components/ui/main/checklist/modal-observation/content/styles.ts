import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    padding: wp(1.2),
  },
  scrollView: {
    height: hp(60),
  },
  timeView: {
    marginBottom: wp(1.2),
  },
  dividerDescStyle: {
    color: Colors.gray,
    fontSize: fp(1.1),
  },
});

export default styles;
