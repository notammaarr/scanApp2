import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icon
import { AppStyles } from "./styles/AppStyles";

const Settings = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("LoginPage"); // Navigate to LoginPage
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccountPage"); // Navigate to CreateAccountPage
  };

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.lfo9}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Navigate back
          style={AppStyles.backButton}
        >
          <Feather name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={AppStyles.text}>Settings</Text>
      </View>

      <View style={AppStyles.squareContainer}>
        <View style={[AppStyles.column, AppStyles.shadow]}>
          <TouchableOpacity
            onPress={handleLogin}
            style={[AppStyles.square, AppStyles.shadow, AppStyles.square1]}
          >
            <Feather
              name="log-in"
              size={60}
              color="white"
              style={AppStyles.icon}
            />
            <Text style={AppStyles.iconsText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCreateAccount}
            style={[AppStyles.square, AppStyles.shadow, AppStyles.square2]}
          >
            <Feather
              name="user-plus"
              size={60}
              color="white"
              style={AppStyles.icon}
            />
            <Text style={AppStyles.iconsText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
