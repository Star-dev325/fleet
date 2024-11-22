import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    borderTopLeftRadius: wp(1),
    borderTopRightRadius: wp(1),
    borderBottomRightRadius: wp(1),
    padding: wp(1),
    marginBottom: wp(0.5),
  },
  noteView: {
    flexDirection: "row",
  },
  addNoteView: {
    marginRight: wp(1),
  },
  addNoteButton: {
    width: wp(4),
    height: undefined,
    aspectRatio: 1,
    backgroundColor: Colors.midLightGreen,
  },
  note: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: wp(15),
    borderRadius: wp(1.2),
    resizeMode: "cover",
  },
  imageDesc: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.midLightGreen,
    borderRadius: wp(1),
    paddingVertical: wp(0.7),
    paddingHorizontal: wp(0.8),
    position: "absolute",
    bottom: 0,
  },
  imageName: {
    color: Colors.white,
    fontSize: fp(1.3),
  },
  imageDownload: {
    backgroundColor: Colors.lightGreen,
    padding: wp(0.6),
  },
  imageSize: {
    color: Colors.white,
    fontSize: fp(1.3),
  },
  content: {
    color: Colors.white,
    fontSize: fp(1.3),
  },
});

export default styles;
