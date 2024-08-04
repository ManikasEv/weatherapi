import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Login/UI/Main';



const Stack = createStackNavigator();

const screens = [
    {
        name: "MainScreen",
        component: Main,
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
                    options={screen.options} 
                />
            ))}
        </Stack.Navigator>
    );
};

export default Navigation;
