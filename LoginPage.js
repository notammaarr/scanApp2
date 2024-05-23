import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AppStyles } from "./styles/AppStyles";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://tidar.ma/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Handle successful login (navigate to another screen, store token, etc.)
        Alert.alert("Success", "Logged in successfully!");
      } else {
        // Handle failed login
        const errorMessage = data.message;
        if (errorMessage.email) {
          Alert.alert(
            "Login Failed",
            `Email Error: ${errorMessage.email.join(", ")}`
          );
        }
        if (errorMessage.password) {
          Alert.alert(
            "Login Failed",
            `Password Error: ${errorMessage.password.join(", ")}`
          );
        }
      }
    } catch (error) {
      // Handle network or other errors
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  return (
    <View style={AppStyles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={AppStyles.backButton}
      >
        <Feather
          name="chevron-left"
          style={AppStyles.backButtonIcon}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <Text style={AppStyles.text}>Login</Text>
      <View style={AppStyles.inputContainer}>
        <Feather
          name="mail"
          size={24}
          color="white"
          style={AppStyles.inputIcon}
        />
        <TextInput
          style={AppStyles.input}
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={AppStyles.inputContainer}>
        <Feather
          name="lock"
          size={24}
          color="white"
          style={AppStyles.inputIcon}
        />
        <TextInput
          style={AppStyles.input}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={AppStyles.loginButton}>
        <Text style={AppStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
