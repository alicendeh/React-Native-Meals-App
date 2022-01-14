import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D2091",
    // paddingVertical: Platform.OS === "ios" ? 22 : 0,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    paddingVertical: 12,
    fontWeight: "bold",
    fontSize: 17,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "ios" ? 60 : 0,
    paddingBottom: 22,
  },
});

export default styles;
