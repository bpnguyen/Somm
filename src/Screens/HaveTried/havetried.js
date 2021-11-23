/* 
* Somm - Have Tried Screen 
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

const HaveTried = (props) => {
    const { navigation } = props;

    const fromHaveTriedToToBeTried = () => {
        navigation.navigate('ToBeTried');
    };

    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => fromHaveTriedToToBeTried()}>
                    <Text style={styles.navigationPressableText}>
                        Go to: To Be Tried
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default HaveTried;