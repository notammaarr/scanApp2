import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ScanPage() {
  const [scanned, setScanned] = React.useState(false);
  const navigation = useNavigation();

  const handleBarcodeScanned = async ({ data }) => {
    setScanned(true);
    console.log("Barcode data:", data);

    try {
      const response = await fetch("https://tidar.ma/api/scan", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer aRccH8QRrd3eKPXLAaHmRpkA2zxLHo2lusEeTfKcGpbKmdvmBoiDORjDhBqn",
        },
        body: JSON.stringify({
          qrcode: data,
        }),
      });

      const result = await response.json();
      console.log("API response:", result);

      if (result.success) {
        Alert.alert("Success", "QR Code is valid.");
      } else {
        Alert.alert("Error", "Invalid QR Code.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred while checking the QR code.");
    } finally {
      setScanned(false);
    }
  };

  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
      >
        <Text style={styles.overlayText}>Scanning...</Text>
      </Camera>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Scan")}
          style={[styles.bottomBarButton, styles.bottomBarButtonLeft]}
        >
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.bottomBarText}>Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePress}
          style={[styles.bottomBarButton, styles.bottomBarButtonRight]}
        >
          <Feather name="info" size={20} color="white" style={styles.icon} />
          <Text style={styles.bottomBarText}>Infos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlayText: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -50 }],
    color: "white",
    fontSize: 24,
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "#333",
    paddingVertical: 10,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBarButtonLeft: {
    borderRightWidth: 1,
    borderRightColor: "white",
  },
  bottomBarButtonRight: {},
  icon: {
    marginBottom: 5,
  },
  bottomBarText: {
    color: "white",
    fontSize: 16,
  },
});
