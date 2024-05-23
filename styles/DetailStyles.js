import { StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "circularstd",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  headerText: {
    flex: 1,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "circularstd",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  progress: {
    color: "#A78ED6",
    fontSize: 16,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  attendeeItemContainer: {
    backgroundColor: "transparent",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 0,
    paddingVertical: 0,
    elevation: 4,
  },
  attendeeItem: {
    backgroundColor: "#2C2C2C",
    borderRadius: 20,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  attendeeNameContainer: {
    backgroundColor: "#333",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  attendeeName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "circularstd",
  },
  attendeeEmail: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "circularstd",
  },
  ticketID: {
    color: "#A78ED6",
    fontSize: 12,
    marginBottom: 5,
    fontFamily: "circularstd",
  },
  badgeText: {
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
    fontFamily: "circularstd",
  },
  infos: {
    marginLeft: 50,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomBar: {
    padding: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchTextContainer: {
    overflow: "hidden",
    borderRadius: 20,
    fontFamily: "circularstd",
  },
  searchText: {
    color: "white",
    fontSize: 16,
    flex: 1,
    fontFamily: "circularstd",
  },
  attendeeDetailsContainer: {
    backgroundColor: "#333",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: "#A78ED6",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
