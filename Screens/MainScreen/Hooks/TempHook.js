import { WEATHERAPI_KEY, BASE_URL } from '@env';

const TempHook = async (lat, lon) => {
  try {
    // Make the API request using fetch
    const response = await fetch(`https://${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHERAPI_KEY}`);

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      // Log the detailed error for debugging
      const errorData = await response.json();
      console.error('Error response data:', errorData);
      throw new Error('Error fetching weather data');
    }

    const data = await response.json();

    return data;
  } catch (error) {

    console.error('Error fetching weather data:', error);

    // Throw the error to be handled by the caller
    throw error;
  }
};

export default TempHook;
