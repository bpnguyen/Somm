/* 
* Somm - Reveal Screen 
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu), Adeline Azungue (aazungue@luc.edu)
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
import winesJson from '../../Assets/Data/Wines.json'
// import NavigationBar from '../../Components/NavigationBar/navigationbar.js';

const Reveal = (props) => {
    // const { navigation, atHome, setAtHome, atFavorites, setAtFavorites } = props;
    const { navigation } = props;

    const getRandomWine = () => {
        var randomArr = [];

        const random = winesJson[Math.floor(Math.random() * winesJson.length)];

        randomArr.push(random.Name);
        randomArr.push(random.Country);
        randomArr.push(random.Region);
        randomArr.push(random.Type);

        return randomArr.toString();
    }

    const [wine, setWine] = React.useState(getRandomWine());

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
            </View>
            <View style={styles.pressableContainer}>
                <Text style={styles.pressableText}>
                    {/* {JSON.stringify(winesJson[Math.floor(Math.random()*winesJson.length)]) */}
                    { wine }
                </Text>
            </View>
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => { }}>
                    <Text style={styles.pressableText}>
                        Add to Favorites
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => { setWine(getRandomWine()) }}>
                    <Text style={styles.pressableText}>
                        Another bottle, please!
                    </Text>
                </Pressable>
            </View>
            {/* <NavigationBar
                atHome={atHome}
                atFavorites={atFavorites}
            /> */}
        </View>
    );
}

export default Reveal;