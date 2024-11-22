import { Colors } from "@/constants/shared";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: wp(2),
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(1),
    alignItems: "center",
  },
  successBg: {
    backgroundColor: Colors.success,
  },
  warningBg: {
    backgroundColor: Colors.warning,
  },
  errorBg: {
    backgroundColor: Colors.danger,
  },
  message: {
    color: "white",
    fontWeight: "bold",
    fontSize: fp(1.3),
    marginLeft: wp(0.5),
  },
});

export default styles;
