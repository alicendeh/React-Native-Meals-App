import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 21,
  },

  main: {
    width: theme.DEVICE_WIDTH - 45,
    backgroundColor: "white",
    elevation: 2,
    marginVertical: 9,
    paddingHorizontal: 12,
    borderRadius: theme.BORDER_RADUIS_SMALL,
    paddingVertical: 12,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  box: {
    backgroundColor: "orange",
    width: 27,
  },
  view1: {
    flexDirection: "row",
  },
});

export default styles;
