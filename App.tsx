import React, { useState } from "react";
import WeatherScreen from "./src/components/WeatherScreen/WeatherScreen";
import SavedCitiesScreen from "./src/components/SavedCitiesScreen/SavedCitiesScreen";
import MapScreen from "./src/components/MapScreen/MapScreen";

const initialCities = [
  { name: "Красноярск", type: "sun" },
  { name: "Зеленогорск", type: "cloud" },
  { name: "Саяногорск", type: "moon" },
  { name: "Питер", type: "rain" },
  { name: "Новосибирск", type: "lightning" },
  { name: "Москва", type: "snow" }
];

export type WeatherType = "sun" | "cloud" | "rain" | "lightning" | "moon" | "snow";

export default function App() {
  const [screen, setScreen] = useState<"weather" | "saved" | "map">("weather");
  const [cities, setCities] = useState(initialCities);
  const [selectedCity, setSelectedCity] = useState(initialCities[0]);

  const handleSelectCity = (cityName: string) => {
    const city = cities.find(c => c.name === cityName);
    if (city) {
      // Перемещаем выбранный город на самый верх
      const newCities = [city, ...cities.filter(c => c.name !== cityName)];
      setCities(newCities);
      setSelectedCity(city);
    }
    setScreen("weather");
  };

  return (
    <>
      {screen === "weather" && (
        <WeatherScreen
          goToSaved={() => setScreen("saved")}
          goToMap={() => setScreen("map")}
          weather={{
            city: selectedCity.name,
            date: "24 Апрель 2025",
            temp: "+19",
            wind: "4 м/с",
            type: selectedCity.type as WeatherType
          }}
        />
      )}
      {screen === "saved" && (
        <SavedCitiesScreen
          goToWeather={() => setScreen("weather")}
          selectedCity={selectedCity.name}
          onSelectCity={handleSelectCity}
          cities={cities.map(c => c.name)}
        />
      )}
      {screen === "map" && <MapScreen goToWeather={() => setScreen("weather")} />}
    </>
  );
}