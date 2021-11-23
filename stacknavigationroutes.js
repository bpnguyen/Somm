import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home/home.js';
import Reveal from './src/Screens/Reveal/reveal.js';
import ToBeTried from './src/Screens/ToBeTried/tobetried.js';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Reveal'
                component={Reveal}
            />
        </Stack.Navigator>
    )
}

export { HomeNavigator };