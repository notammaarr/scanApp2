import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Animated,
  Image,
} from "react-native";
import { eventStyles } from "./styles/EventsStyles"; // Import des styles depuis le fichier séparé
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Events = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = React.useState(false);
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const [loaded] = useFonts({
    circularstd: require("./assets/fonts/circular-std.ttf"),
  });

  const handlePressEvent = (selectedEvent) => {
    console.log("Event changed to:", selectedEvent.name);
    navigation.navigate("Home", { eventName: selectedEvent.name });
  };

  const animateScale = (toValue) => {
    Animated.timing(scaleValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const renderEvents = () => {
    // Simuler une liste d'événements
    const events = [
      { id: 1, name: "Event 1", date: "15 Apr" },
      { id: 2, name: "Event 2", date: "20 May" },
      { id: 3, name: "Event 3", date: "10 Jun" },
      { id: 4, name: "Event 4", date: "25 Jul" },
      { id: 5, name: "Event 5", date: "5 Aug" },
    ];

    return events.map((event) => (
      <TouchableHighlight
        key={event.id}
        style={[
          eventStyles.eventContainer,
          isHovered && { backgroundColor: "#A78ED6" }, // Changement de couleur lorsqu'il est survolé
        ]}
        onPress={() => handlePressEvent(event)}
        onMouseEnter={() => {
          setIsHovered(true);
          animateScale(1.05);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          animateScale(1);
        }}
      >
        <Animated.View
          style={[
            eventStyles.eventContent,
            { transform: [{ scale: scaleValue }] }, // Animation de mise à l'échelle
          ]}
        >
          <View style={eventStyles.eventDetails}>
            <Text style={eventStyles.eventName}>{event.name}</Text>
            <Text style={eventStyles.eventDate}>{event.date}</Text>
          </View>
          <TouchableOpacity
            style={eventStyles.scanButtonContainer}
            onPress={() => handlePressEvent(event)}
          >
            <TouchableOpacity
              style={eventStyles.scanButton}
              onPress={() => handlePressEvent(event)}
            >
              <Text style={eventStyles.scanButtonText}>Scan</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Animated.View>
      </TouchableHighlight>
    ));
  };

  return (
    <View style={eventStyles.container}>
      <View style={eventStyles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Back Button */}
          <AntDesign
            name="arrowleft"
            style={eventStyles.backButtonIcon}
            size={24}
            color="#FFF"
          />
        </TouchableOpacity>
        {/* Grand titre "TIDAR" */}
        <Image
          source={require("./assets/images/Tidar.png")} // Replace with the path to your image file
          style={eventStyles.tidarLogo} // Adjust the width and height as needed
        />
      </View>
      {/* Barre de recherche */}
      <View style={eventStyles.searchBar}>
        <View style={eventStyles.searchIconContainer}>
          <Feather name="search" size={24} color="white" />
        </View>
        <TextInput
          style={eventStyles.input}
          placeholder="Search Events"
          placeholderTextColor="#9e9e9e"
          value={""} // Il n'y a pas de variable de recherche définie
          onChangeText={() => {}} // La fonction onChangeText est vide car il n'y a pas de variable de recherche
        />
        <TouchableOpacity style={eventStyles.searchButton}>
          <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Titre "Upcoming events" */}
      <Text style={eventStyles.upcomingEventsText}>Upcoming events</Text>

      {/* Liste des événements */}
      <ScrollView style={eventStyles.eventsContainer}>
        {renderEvents()}
      </ScrollView>
    </View>
  );
};

export default Events;
