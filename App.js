import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/Screens/Home/home.js';
import ToBeTried from './src/Screens/ToBeTried/tobetried.js';

import { HomeNavigator } from './stacknavigationroutes.js';

// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Somm = () => {
    const [atHome, setAtHome] = React.useState(true);
    const [atFavorites, setAtFavorites] = React.useState(false);

    return (
        <NavigationContainer>
            {/* <Stack.Navigator
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
            </Stack.Navigator> */}

            <Tab.Navigator
                initialRouteName='Home'
                // activeColor='#e91e63'
                barStyle={{ backgroundColor: '#ad423c' }}
                tabBarOptions={{
                    labelStyle: { fontSize: 18 },
                    activeTintColor: 'white',
                    inactiveTintColor: '#fcb9b8'
                }}>
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        tabBarLabel: 'Home',
                        // tabBarIcon: ({ color }) => (
                        //     <MaterialCommunityIcons name='home' color={color} size={18} />
                        // ),
                    }}
                />
                <Tab.Screen
                    name='Favorites'
                    component={ToBeTried}
                    options={{
                        tabBarLabel: 'Favorites',
                        // tabBarIcon: ({ color }) => (
                        //     <MaterialCommunityIcons name='heart' color={color} size={18} />
                        // ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Somm;