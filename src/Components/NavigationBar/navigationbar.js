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

const NavigationBar = () => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.pressable}
                onpress={() => { }}>
                <Text style={styles.pressableText}>
                    Home
                </Text>
            </Pressable>
            <View style={styles.separator} />
            <Pressable
                style={styles.pressable}
                onpress={() => { }}>
                <Text style={styles.pressableText}>
                    Favorites
                </Text>
            </Pressable>
        </View>
    );
}

export default NavigationBar;