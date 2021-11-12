/* 
* Somm - Navigation Bar
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*
* Licenses:
*   - https://fontawesome.com/license
*/

import React from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native';

import styles from './styles.js';

const NavigationBar = () => {
    return (
        <View style={styles.navContainer}>
            <Pressable
                style={styles.button}
                onpress={() => { }}>
                <Text style={styles.buttonText}>
                    Home
                </Text>
            </Pressable>
            <View style={styles.separator} />
            <Pressable
                style={styles.button}
                onpress={() => { }}>
                <Text style={styles.buttonText}>
                    Favorites
                </Text>
            </Pressable>
        </View>
    );
}

export default NavigationBar;