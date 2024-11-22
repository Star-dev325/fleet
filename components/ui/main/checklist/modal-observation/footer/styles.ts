import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.midLightGreen,
    marginHorizontal: wp(1.2),
    marginBottom: wp(1.2),
    borderRadius: wp(1),
    paddingHorizontal: wp(1),
    paddingVertical: wp(0.8),
  },
  chatView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.black,
    borderRadius: wp(1),
    marginRight: wp(1),
  },
  chat: {
    color: Colors.white,
    fontSize: fp(1.3),
  },
  cameraButton: {},
  sendButton: {
    backgroundColor: Colors.success,
  },
});

export default styles;
