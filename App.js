import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home/home.js';
import Reveal from './src/Screens/Reveal/reveal.js';

const Stack = createStackNavigator();

const Somm = () => {
    const [atHome, setAtHome] = React.useState(true);
    const [atFavorites, setAtFavorites] = React.useState(false);

    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
}

export default Somm;