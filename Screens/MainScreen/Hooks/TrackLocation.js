// useTrackLocation.js
import { useEffect } from 'react';
import * as Location from 'expo-location';

const useTrackLocation = (setLocation, setErrorMsg, setCity, setLat, setLon) => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      try {
        let geocode = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          language: 'en', 
        });

        if (geocode.length > 0) {

          setCity(geocode[0].city);
        } else {
          setCity('City not found');
        }
      } catch (error) {
        console.error('Error fetching reverse geocode:', error);
        setCity('City not found');
      }
    })();
  }, []);
};

export default useTrackLocation;
