import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface MapScreenProps {
  goToWeather: () => void;
}

const latitude = 55.751244; // Москва, замените на нужные координаты
const longitude = 37.618423;

const MapScreen: React.FC<MapScreenProps> = ({ goToWeather }) => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} title="Москва" />
    </MapView>
    <TouchableOpacity style={styles.backButton} onPress={goToWeather}>
      <Text style={styles.backButtonText}>Назад</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(69, 65, 65, 0.8)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    zIndex: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default MapScreen;