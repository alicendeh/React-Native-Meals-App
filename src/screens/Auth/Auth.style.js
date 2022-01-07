import { StyleSheet } from "react-native";
import theme from "../../theme";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginHorizontal: 22,
  },
  annimContainer: {
    width: theme.DEVICE_WIDTH * 0.9,
    height: theme.DEVICE_HEIGHT * 0.2,
  },
  welcome: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 22,
    height: 55,
  },
  inputView: {
    width: "100%",
    height: 125,
    borderWidth: 1,
    borderRadius: 2,
    borderStyle: "dashed",
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 19,
  },
  submit: {
    backgroundColor: theme.COLORS.PRIMARY,
    alignItems: "center",
    marginVertical: 14,
    paddingVertical: 12,
  },
  capturedImg: {
    width: "100%",
    height: "100%",
  },
  capturedImgView: {
    height: 125,
    width: "100%",
    marginTop: 19,
  },
  submit: {
    backgroundColor: theme.COLORS.PRIMARY,
    alignItems: "center",
    marginVertical: 14,
    paddingVertical: 12,
  },
});

export default style;
