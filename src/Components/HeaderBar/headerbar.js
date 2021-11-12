/* 
* Somm - Header Bar
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

const HeaderBar = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                Somm
            </Text>
        </View>
    );
}

export default HeaderBar;