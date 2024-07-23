import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Screens/MainScreen/UI/MainScreen'; // Import the MainScreen component

const Stack = createStackNavigator();

const screens = [
    {
        name: "MainScreen",
        component: MainScreen,
        options: {
            headerShown: false
        }
    },
    // Add more screens here as needed
    // {
    //     name: "AnotherScreen",
    //     component: AnotherScreen,
    //     options: {
    //         headerShown: false
    //     }
    // },
];

const Navigation = () => {
    return (
        <Stack.Navigator>
            {screens.map((screen, index) => (
                <Stack.Screen 
                    key={index} 
                    name={screen.name} 
                    component={screen.component} 
                    options={screen.options} // Ensure options are passed here
                />
            ))}
        </Stack.Navigator>
    );
};

export default Navigation;
