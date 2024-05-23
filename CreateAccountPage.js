import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AppStyles } from "./styles/AppStyles";

const CreateAccountPage = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    // Implement create account functionality here
  };

  return (
    <View style={AppStyles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()} // Navigate back
        style={AppStyles.backButton}
      >
        <Feather name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={AppStyles.text}>Create Account</Text>
      <View style={AppStyles.inputContainer}>
        <Feather
          name="user"
          size={24}
          color="white"
          style={AppStyles.inputIcon}
        />
        <TextInput
          style={AppStyles.input}
          placeholder="Full Name"
          placeholderTextColor="#A0A0A0"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>
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
      <View style={AppStyles.inputContainer}>
        <Feather
          name="lock"
          size={24}
          color="white"
          style={AppStyles.inputIcon}
        />
        <TextInput
          style={AppStyles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={AppStyles.loginButton}
      >
        <Text style={AppStyles.loginButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountPage;
