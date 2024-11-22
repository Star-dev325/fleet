import { StyleSheet } from "react-native";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: wp(2),
  },
  logoView: {
    flex: 0.7,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    resizeMode: "contain",
  },
  menuView: {
    flex: 2.5,
    justifyContent: "center",
  },
  menu: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.blueGray,
    paddingVertical: wp(0.6),
    paddingHorizontal: wp(1),
    borderRadius: wp(1.5),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: wp(3),
    height: wp(3),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: wp(0.1),
    borderColor: Colors.gray,
    borderRadius: wp(1),
    marginRight: wp(1),
  },
  activeMenuIcon: {
    borderColor: Colors.white,
  },
  menuText: {
    color: Colors.gray,
    fontSize: fp(1.2),
  },
  activeMenuText: {
    color: Colors.white,
  },
  toolView: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: wp(1),
  },
  notificationBtn: {
    width: wp(3),
    aspectRatio: 1,
    borderRadius: wp(1),
    borderWidth: wp(0.1),
    borderColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBtnImage: {
    width: "60%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  userProfileView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarView: {
    width: wp(3),
  },
  avatar: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: wp(1),
  },
  userNameView: {
    flexDirection: "row",
    alignItems: "center",
  },
  hello: {
    fontSize: fp(1),
    color: Colors.gray,
  },
  name: {
    fontSize: fp(1.2),
    color: Colors.white,
    fontWeight: "bold",
  },
  userProfileArrowView: {
    marginLeft: wp(1),
  },
});

export default styles;
