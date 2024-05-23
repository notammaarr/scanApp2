import { StyleSheet } from "react-native";

export const scanStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    color: "white",
    fontFamily: "circularstd",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "#363636",
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 80,
  },
  bottomBarButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  bottomBarButtonLeft: {
    borderRightColor: "#424242",
    borderRightWidth: 1,
  },
  bottomBarButtonRight: {
    borderLeftColor: "#424242",
    borderLeftWidth: 1,
  },
  bottomBarText: {
    color: "#F6F6F6",
    fontSize: 12,
    fontFamily: "circularstd",
    marginTop: 10,
  },
});
