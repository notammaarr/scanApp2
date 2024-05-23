import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: "#1E1E1E",*/
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C2C2C",
    borderRadius: 10,
    //marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lfo9: {
    flexDirection: "column",
    marginTop: 150,
    marginLeft: 20,
    //marginRight: 0,
  },
  text: {
    color: "#F6F9FC",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "circularstd",
    marginBottom: 20,
    marginRight: 150,
  },
  switchEventButton: {
    marginTop: -15,
  },
  switchEventText: {
    color: "#A78ED6",
    fontSize: 13,
    fontFamily: "circularstd",
  },
  squareContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 300,
    marginHorizontal: 20,
  },
  column: {
    flex: 1,
    justifyContent: "center",
  },
  square: {
    width: 140,
    height: 130,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  square1: {
    backgroundColor: "#FF6B6B",
  },
  square2: {
    backgroundColor: "#50C878",
  },
  square3: {
    backgroundColor: "#FFD700",
  },
  square4: {
    backgroundColor: "#6A5ACD",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 20,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  icon: {
    marginTop: 10,
    color: "#fff",
  },
  iconsText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "circularstd",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "circularstd",
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#A0A0A0",
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: "#A78ED6",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButtonIcon: {
    marginRight: 20,
  },
});
