import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation'; // Import the Navigation component
import { useFonts } from 'expo-font';

const App = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    );
};

export default App;
