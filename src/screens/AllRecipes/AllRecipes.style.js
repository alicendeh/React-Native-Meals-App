import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 12,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});

export default styles;
