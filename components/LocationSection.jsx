import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { colors } from "../constants/Colors";

const LocationSection = () => {
  const [location, setLocation] = useState(null);

  //  checkPermissions for getLocation
  const checkPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status === "granted") {
        getLocation();
      } else {
        Alert.alert("Location permission is required to use this feature.");
      }
    } catch (error) {
      console.error("Error checking location permission: ", error);
    }
  };

  //
  const getLocation = async () => {
    try {
      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const { latitude, longitude } = position.coords;

      setLocation({ latitude, longitude });
    } catch (error) {
      console.error("Unable to fetch location: ", error);
      Alert.alert("Unable to fetch location. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Professional</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={
            location
              ? { ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 }
              : undefined
          }
        >
          {location && <Marker coordinate={location} title="Your Location" />}
        </MapView>
        <TouchableOpacity style={styles.button} onPress={checkPermission}>
          <Text style={styles.buttonText}>Track</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    lineHeight: 25,
    color: colors.textColor.black,
  },
  mapContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#3FA455",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    lineHeight: 21,
    fontSize: 14,
  },
});
