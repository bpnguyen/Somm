/* 
* Somm - Filters Screen 
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

const Filters = (props) => {
    const { navigation } = props;

    const fromFiltersToReveal = () => {
        navigation.navigate('Reveal');
    };

    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => fromFiltersToReveal()}>
                    <Text style={styles.navigationPressableText}>
                        Uncork the bottle!
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Filters;