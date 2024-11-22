import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    borderRadius: wp(1),
    borderColor: Colors.green,
    borderWidth: wp(0.2),
  },
  searchBtn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

export default styles;
