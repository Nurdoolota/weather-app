import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./SavedCitiesScreen.styles";
import { StarIcon } from "../../icons/StarIcon";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";

interface SavedCitiesScreenProps {
  goToWeather: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  cities: string[];
}

const SavedCitiesScreen: React.FC<SavedCitiesScreenProps> = ({
  goToWeather,
  selectedCity,
  onSelectCity,
  cities,
}) => {
  const [search, setSearch] = useState("");

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBlock}>
        <TouchableOpacity onPress={goToWeather} style={styles.arrowBack}>
          <ArrowLeftIcon size={24} color="#222" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="поиск"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>
      <FlatList
        data={filteredCities}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cityButton,
              item === selectedCity && styles.cityButtonActive,
            ]}
            onPress={() => onSelectCity(item)}
          >
            <StarIcon filled={item === selectedCity} size={26} />
            <Text
              style={[
                styles.cityText,
                item === selectedCity && styles.cityTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.cityList}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

export default SavedCitiesScreen;