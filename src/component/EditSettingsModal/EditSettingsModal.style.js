import { StyleSheet } from "react-native";
import theme from "../../theme";

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingTop: 25,
    paddingHorizontal: 21,
    paddingBottom: 12,
    flex: 1,
    backgroundColor: "white",
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  currentSetting: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 22,
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  iconVIew: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 50,
    padding: 5,
    position: "relative",
    right: -35,
    top: -27,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: 55,
  },
  btn: {
    backgroundColor: theme.COLORS.PRIMARY,
    marginVertical: 21,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
  },
  editView: {
    marginVertical: 22,
  },
});

export default style;
