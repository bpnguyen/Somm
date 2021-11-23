import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeNavigator, FavoritesNavigator } from './StackRoutes.js';

const Tab = createMaterialBottomTabNavigator();

const Somm = () => {
    const [atHome, setAtHome] = React.useState(true);
    const [atFavorites, setAtFavorites] = React.useState(false);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
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
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='home' color={color} size={18} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Favorites'
                    component={FavoritesNavigator}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='heart' color={color} size={18} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Somm;