/* 
* Somm - Reveal Screen 
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
import NavigationBar from '../../Components/NavigationBar/navigationbar.js';

const Reveal = () => {
    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../Assets/Images/GoldSpeckles.png')}
                    style={styles.goldSpecklesImage}>
                </Image>
                <Image
                    source={require('../../Assets/Images/BlankBottle.png')}
                    style={styles.bottleImage}>
                </Image>
                <Image
                    source={require('../../Assets/Images/GoldLabel.png')}
                    style={styles.goldLabelImage}>
                </Image>
                {/* <View style={styles.imageContainer}>
                    <Image
                        source={require('../../Assets/Images/GoldLabel.png')}
                        style={styles.goldLabelImage}>
                    </Image>
                </View> */}
            </View>
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onpress={() => { }}>
                    <Text style={styles.pressableText}>
                        Add to Favorites
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onpress={() => { }}>
                    <Text style={styles.pressableText}>
                        Another bottle, please!
                    </Text>
                </Pressable>
            </View>
            <NavigationBar />
        </View>
    );
}

export default Reveal;