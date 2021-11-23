/* 
* Somm - To Be Tried Screen 
* 
* Creator: 
*/

import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable
} from 'react-native';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';

const ToBeTried = (props) => {
    const { navigation, atHome, setAtHome, atFavorites, setAtFavorites } = props;

    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => { }}>
                    <Text style={styles.pressableText}>
                        Test Pressable
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default ToBeTried;