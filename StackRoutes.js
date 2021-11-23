import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home/home.js';
import Reveal from './src/Screens/Reveal/reveal.js';
import Filters from './src/Screens/Filters/filters.js';
import ToBeTried from './src/Screens/ToBeTried/tobetried.js';
import HaveTried from './src/Screens/HaveTried/havetried.js';

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
            <Stack.Screen
                name='Filters'
                component={Filters}
            />
        </Stack.Navigator>
    )
}

export { HomeNavigator };

const FavoritesNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name='ToBeTried'
                component={ToBeTried}
            />
            <Stack.Screen
                name='HaveTried'
                component={HaveTried}
            />
        </Stack.Navigator>
    )
}

export { FavoritesNavigator };