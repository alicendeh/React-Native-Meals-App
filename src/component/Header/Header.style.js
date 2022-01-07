import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 55 : 25,
    paddingHorizontal: 21,
    paddingBottom: 40,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    backgroundColor: "#efefef",
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 7,
  },
});

export default styles;
