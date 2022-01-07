import { StyleSheet, Platform } from "react-native";
import theme from "../../theme/index";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  indic: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    flex: 1,
  },
  searchBar: {
    width: "90%",
    backgroundColor: "#efefef",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 10,
    marginHorizontal: 21,
    marginTop: -12,
    height: 38,
  },
  mainSearchCOntainer: {
    backgroundColor: "#fff",
  },
  inputBox: {
    fontSize: 18,
    color: "#000",
  },
  cancelContainer: {
    alignItems: "flex-end",
    marginHorizontal: 22,
    marginTop: 5,
  },
  annimContainer: {
    width: theme.DEVICE_WIDTH * 0.9,
    height: "80%",
  },
  comingSoonText: {
    textAlign: "center",
  },

  btnView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
  },
  filterView: {
    backgroundColor: "#FF4D2D",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 45,
  },
  iconPosition: {
    alignItems: "flex-end",
    position: "absolute",
    right: 20,
    top: -22.5,
  },
  iconPosition1: {
    alignItems: "flex-end",
    right: 20,
    top: -22.5,
  },
  main: {
    backgroundColor: "#FFFEFF",
    paddingVertical: 35,
    paddingHorizontal: 21,
    flex: 1,
  },
});

export default style;
