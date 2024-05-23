import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScanPage from "./ScanPage";
import Events from "./Events";
import { AppStyles } from "./styles/AppStyles";
import TicketListing from "./TicketListing";
import TicketDetails from "./TicketDetails";
import Settings from "./Settings";
import LoginPage from "./LoginPage"; // Import LoginPage
import CreateAccountPage from "./CreateAccountPage"; // Import CreateAccountPage

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    circularstd: require("./assets/fonts/circular-std.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={ScanPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TicketListing"
          component={TicketListing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TicketDetails"
          component={TicketDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage" // Add LoginPage screen to the navigation stack
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccountPage" // Add CreateAccountPage screen to the navigation stack
          component={CreateAccountPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation, route }) => {
  const [eventName, setEventName] = useState("To choose an event");

  React.useEffect(() => {
    if (route.params?.eventName) {
      setEventName(route.params.eventName);
    }
  }, [route.params?.eventName]);

  const handlePress = () => {
    console.log(" Button pressed!");
  };

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.lfo9}>
        <Text style={AppStyles.text}>{eventName}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Events")}
          style={AppStyles.switchEventButton}
        >
          <Text style={AppStyles.switchEventText}>Switch event &gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={AppStyles.squareContainer}>
        <View style={[AppStyles.column, AppStyles.shadow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TicketListing")}
            style={[AppStyles.square, AppStyles.shadow, AppStyles.square1]}
          >
            <MaterialCommunityIcons
              name="ticket"
              size={60}
              color="white"
              style={AppStyles.icon}
            />
            <Text style={AppStyles.iconsText}>Tickets</Text>
            <Text style={AppStyles.subtitle}>?/? validated</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePress}
            style={[AppStyles.square, AppStyles.shadow, AppStyles.square2]}
          >
            <Zocial
              name="guest"
              size={60}
              color="white"
              style={AppStyles.icon}
            />
            <Text style={AppStyles.iconsText}>Guests</Text>
            <Text style={AppStyles.subtitle}>?/? checked</Text>
          </TouchableOpacity>
        </View>
        <View style={[AppStyles.column, AppStyles.shadow]}>
          <TouchableOpacity
            onPress={handlePress}
            style={[AppStyles.square, AppStyles.shadow, AppStyles.square3]}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={60}
              color="white"
              style={AppStyles.icon}
            />
            <Text style={AppStyles.iconsText}>Scans</Text>
            <Text style={AppStyles.subtitle}>? scans connected</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={[AppStyles.square, AppStyles.shadow, AppStyles.square4]}
          >
            <Feather
              name="settings"
              size={60}
              color="white"
              style={AppStyles.icon}
            />
            <Text style={AppStyles.iconsText}>Settings</Text>
            <Text style={AppStyles.subtitle}>None</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={AppStyles.bottomBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Scan")}
          style={[AppStyles.bottomBarButton, AppStyles.bottomBarButtonLeft]}
        >
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color="white"
            style={AppStyles.icon}
          />
          <Text style={AppStyles.bottomBarText}>Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePress}
          style={[AppStyles.bottomBarButton, AppStyles.bottomBarButtonRight]}
        >
          <Feather name="info" size={20} color="white" style={AppStyles.icon} />
          <Text style={AppStyles.bottomBarText}>Infos</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};
