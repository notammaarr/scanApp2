import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ticketStyles } from "./styles/TicketStyles"; // Importing styles from TicketStyles file
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const TicketListing = () => {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    circularstd: require("./assets/fonts/circular-std.ttf"),
  });

  // Dummy ticket data
  const tickets = [
    { id: 1, type: "General", quantity: 2, price: "$20" },
    { id: 2, type: "VIP", quantity: 1, price: "$50" },
    { id: 3, type: "Student", quantity: 3, price: "$15" },
  ];

  // Function to handle navigation to TicketDetails
  const handleTicketPress = (ticketType) => {
    navigation.navigate("TicketDetails", { ticketType });
  };

  // Function to render ticket items
  const renderTickets = () => {
    return tickets.map((ticket) => (
      <TouchableOpacity
        key={ticket.id}
        style={ticketStyles.ticketContainer}
        onPress={() => handleTicketPress(ticket.type)}
      >
        <Animated.View
          style={[
            ticketStyles.ticketContent,
            { opacity: 1, transform: [{ translateY: 0 }] },
          ]}
        >
          <Text style={ticketStyles.ticketType}>{ticket.type}</Text>
          <Text style={ticketStyles.ticketQuantity}>
            Quantity: {ticket.quantity}
          </Text>
          <Text style={ticketStyles.ticketPrice}>Price: {ticket.price}</Text>
        </Animated.View>
      </TouchableOpacity>
    ));
  };

  return (
    <LinearGradient
      colors={["#363636", "#1E1E1E"]}
      style={ticketStyles.container}
    >
      {/* Header */}
      <View style={ticketStyles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Back Button */}
          <AntDesign
            name="arrowleft"
            style={ticketStyles.backButtonIcon}
            size={24}
            color="#FFF"
          />
        </TouchableOpacity>
        <Text style={ticketStyles.headerText}>Ticket Listing</Text>
      </View>
      {/* Ticket list */}
      <ScrollView
        style={ticketStyles.ticketList}
        contentContainerStyle={ticketStyles.ticketListContent}
      >
        {renderTickets()}
      </ScrollView>
    </LinearGradient>
  );
};

export default TicketListing;
