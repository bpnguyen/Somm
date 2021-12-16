/* 
* Somm - Stack Routes
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home/home.js';
import Reveal from './src/Screens/Reveal/reveal.js';
import Filters from './src/Screens/Filters/filters.js';
import Favorites from './src/Screens/Favorites/favorites.js';

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
                name='Favorites'
                component={Favorites}
            />
        </Stack.Navigator>
    )
}

export { FavoritesNavigator };