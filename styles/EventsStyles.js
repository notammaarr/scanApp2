import { StyleSheet } from "react-native";

export const eventStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    zIndex: 2,
    width: "100%",
    backgroundColor: "#2C2C2C",
  },
  backButtonIcon: {
    marginRight: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#434343",
    paddingHorizontal: 10,
    fontFamily: "circularstd",
  },
  searchIconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 12,
    fontFamily: "circularstd",
  },
  tidarLogo: {
    marginLeft: 20,
    width: 100,
    height: 70,
  },

  upcomingEventsText: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: "circularstd",
  },
  eventsContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  eventContainer: {
    backgroundColor: "#363636",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  eventDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 10,
  },
  eventName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "circularstd",
  },
  eventDate: {
    color: "#A78ED6",
    fontSize: 18,
    fontFamily: "circularstd",
  },
  scanButtonContainer: {
    alignSelf: "flex-end",
  },
  scanButton: {
    backgroundColor: "#A78ED6",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  scanButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "circularstd",
  },
});
