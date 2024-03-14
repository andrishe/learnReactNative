import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.blanc,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
});

export default globalStyles;
