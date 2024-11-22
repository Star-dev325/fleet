import { StyleSheet } from "react-native";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: Colors.charcoal,
    opacity: 0.8,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default styles;
