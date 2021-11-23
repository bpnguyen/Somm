/* 
* Somm - Navigation Bar
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native';

import styles from './styles.js';

const NavigationBar = (props) => {
    const { navigation, atHome, atFavorites } = props;

    return (
        <View style={styles.container}>
            {/* <Pressable
                disabled={atHome ? true : false}
                // style={styles.pressable}
                style={atHome ? styles.disabledPressable : styles.pressable}
                onpress={() => navigation.navigate('Home')}>
                <Text style={styles.pressableText}>
                    Home
                </Text>
            </Pressable> */}
            <Pressable
                style={styles.pressable}
                // onpress={() => navigation.navigate('Home')}>
                onpress={() => console.log('Pressed Home')}>
                <Text style={styles.pressableText}>
                    Home
                </Text>
            </Pressable>
            <View style={styles.separator} />
            <Pressable
                style={styles.pressable}
                onpress={() => navigation.navigate('ToBeTried')}>
                <Text style={styles.pressableText}>
                    Favorites
                </Text>
            </Pressable>
        </View >
    );
}

export default NavigationBar;