import { StyleSheet } from "react-native";

export const ticketStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  backButtonIcon: {
    marginRight: 20,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "circularstd",
  },
  ticketList: {
    marginTop: 20,
  },
  ticketListContent: {
    paddingBottom: 20,
  },
  ticketContainer: {
    backgroundColor: "#2C2C2C",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ticketContent: {
    padding: 20,
  },
  ticketType: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "circularstd",
  },
  ticketQuantity: {
    color: "#A78ED6",
    fontSize: 16,
    marginTop: 5,
    fontFamily: "circularstd",
  },
  ticketPrice: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
    fontFamily: "circularstd",
  },
});
