/* 
* Somm - To Be Tried Screen 
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
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
    const { navigation } = props;

    const fromToBeTriedToHaveTried = () => {
        navigation.navigate('HaveTried');
    };

    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => fromToBeTriedToHaveTried()}>
                    <Text style={styles.navigationPressableText}>
                        Go to: Have Tried
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default ToBeTried;