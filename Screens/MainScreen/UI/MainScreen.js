import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../Styles/MainScreenStyles';
import useTrackLocation from '../Hooks/TrackLocation';
import TempHook from '../Hooks/TempHook';

const MainScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weather, setWeather] = useState(null);

  // Use the hook to track location
  useTrackLocation(setLocation, setErrorMsg, setCity, setLat, setLon);

  useEffect(() => {
    const fetchWeather = async () => {
      if (lat && lon) {
        try {
          const weatherData = await TempHook(lat, lon);
          setWeather(weatherData);
          console.log(weatherData.list[0]); // Log the first item of the list for verification
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeather();
  }, [lat, lon]); // Run when 'lat' or 'lon' changes

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15; // Convert Kelvin to Celsius
  };

  return (
    <View style={styles.container}>
      {weather ? (
        <Text>Temperature: {kelvinToCelsius(weather.list[0].main.temp).toFixed(2)} °C</Text>
      ) : (
        <Text>Loading weather data</Text>
      )}
    </View>
  );
};

export default MainScreen;
