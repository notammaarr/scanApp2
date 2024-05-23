import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Animated,
  Easing,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { detailStyles } from "./styles/DetailStyles";
import { useFonts } from "expo-font";

const TicketDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [attendees, setAttendees] = useState([]);
  const [ticketType, setTicketType] = useState(route.params.ticketType);
  const [validatedTickets, setValidatedTickets] = useState("0/16");
  const [searchBarWidth] = useState(new Animated.Value(0));
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState(null);
  const [isAttendeeDetailsVisible, setIsAttendeeDetailsVisible] =
    useState(false);

  const [loaded] = useFonts({
    circularstd: require("./assets/fonts/circular-std.ttf"),
  });

  useEffect(() => {
    fetchAttendeesData();
    const interval = setInterval(() => {
      updateHeaderData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchAttendeesData = async () => {
    try {
      const dummyAttendees = [
        {
          id: 1,
          name: "Ammar Jerada",
          email: "ammar@gmail.com",
          ticketID: "ABCD1234",
        },
        {
          id: 2,
          name: "Ahmed Amine",
          email: "amine@gmail.com",
          ticketID: "EFGH5678",
        },
      ];
      setAttendees(dummyAttendees);
    } catch (error) {
      console.error("Error fetching attendees:", error);
    }
  };

  const updateHeaderData = () => {
    setValidatedTickets("0/16");
  };

  const handleAttendeePress = (item) => {
    setSelectedAttendee(item);
    setIsAttendeeDetailsVisible(true);
  };

  const renderAttendeeItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleAttendeePress(item)}>
        <LinearGradient
          colors={["#444", "#222"]}
          start={[0, 0]}
          end={[1, 1]}
          style={detailStyles.attendeeItemContainer}
        >
          <View style={detailStyles.attendeeItem}>
            <View style={detailStyles.attendeeNameContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={detailStyles.attendeeName}>{item.name}</Text>
                <MaterialIcons name="chevron-right" size={24} color="white" />
              </View>
            </View>
            <View style={detailStyles.infos}>
              <View style={detailStyles.infoRow}>
                <MaterialIcons name="email" size={20} color="white" />
                <Text style={detailStyles.attendeeEmail}>{item.email}</Text>
              </View>
              <View style={detailStyles.infoRow}>
                <MaterialIcons
                  name="confirmation-number"
                  size={20}
                  color="#A78ED6"
                />
                <Text style={detailStyles.ticketID}>{item.ticketID}</Text>
              </View>
              <View style={detailStyles.infoRow}>
                <MaterialIcons name="local-offer" size={20} color="#FF6B6B" />
                <Text style={detailStyles.badgeText}>{ticketType}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const handleSearchInputChange = (text) => {
    // Handle search input change here
  };

  const toggleSearchBar = () => {
    setIsSearchBarExpanded(!isSearchBarExpanded);
    Animated.timing(searchBarWidth, {
      toValue: isSearchBarExpanded ? 0 : 200,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const handleValidateTicket = () => {
    // Logique de validation du billet
    console.log("Billet validé pour:", selectedAttendee.name);
  };

  const handleRefundTicket = () => {
    // Logique de remboursement du billet
    console.log("Billet remboursé pour:", selectedAttendee.name);
  };

  return (
    <LinearGradient
      colors={["#636363", "#242424"]}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <View style={detailStyles.container}>
        <View style={detailStyles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={detailStyles.headerText}>{ticketType}</Text>
        </View>
        <View style={detailStyles.content}>
          <View style={detailStyles.header}>
            <Text style={detailStyles.progress}>
              {validatedTickets} validated tickets
            </Text>
          </View>
          <FlatList
            data={attendees}
            renderItem={renderAttendeeItem}
            keyExtractor={(item) => item.id.toString()}
            style={detailStyles.list}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isAttendeeDetailsVisible}
          onRequestClose={() => setIsAttendeeDetailsVisible(false)}
        >
          <TouchableWithoutFeedback
            onPress={() => setIsAttendeeDetailsVisible(false)}
          >
            <View style={detailStyles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={detailStyles.attendeeDetailsContainer}>
            <Text style={detailStyles.attendeeName}>
              {selectedAttendee && selectedAttendee.name}
            </Text>
            <Text style={detailStyles.attendeeEmail}>
              {selectedAttendee && selectedAttendee.email}
            </Text>
            <Text style={detailStyles.ticketID}>
              {selectedAttendee && selectedAttendee.ticketID}
            </Text>
            <View style={detailStyles.optionsContainer}>
              <TouchableOpacity
                style={detailStyles.optionButton}
                onPress={handleValidateTicket}
              >
                <Text style={detailStyles.optionButtonText}>
                  Valider le billet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={detailStyles.optionButton}
                onPress={handleRefundTicket}
              >
                <Text style={detailStyles.optionButtonText}>
                  Rembourser le billet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={detailStyles.bottomBar}>
          <TouchableOpacity onPress={toggleSearchBar}>
            <LinearGradient
              colors={["#636363", "#242424"]}
              start={[0, 0]}
              end={[1, 0]}
              style={detailStyles.searchBar}
            >
              <MaterialIcons
                name="search"
                size={20}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Animated.View
                style={[
                  detailStyles.searchTextContainer,
                  { width: searchBarWidth },
                ]}
              >
                <TextInput
                  style={detailStyles.searchText}
                  placeholder="Search attendees"
                  placeholderTextColor="white"
                  onChangeText={handleSearchInputChange}
                />
              </Animated.View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TicketDetails;
