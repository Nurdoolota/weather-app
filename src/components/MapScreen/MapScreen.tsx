import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./MapScreen.styles";

interface MapScreenProps {
  goToWeather: () => void;
}

const MapScreen: React.FC<MapScreenProps> = ({ goToWeather }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Карта (заглушка)</Text>
    <Button title="Назад" onPress={goToWeather} />
  </View>
);

export default MapScreen;