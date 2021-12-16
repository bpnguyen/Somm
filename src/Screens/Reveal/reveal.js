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

const Reveal = (props) => {
    const { navigation } = props;

    const getRandomWine = () => {
        const randomWine = winesJson[Math.floor(Math.random() * winesJson.length)];

        let randomWineDict = {
            'Name': randomWine.Name.substring(0, (randomWine.Name.length - 5)),
            'Country': randomWine.Country,
            'Region': randomWine.Region,
            'Winery': randomWine.Winery,
            'Rating': randomWine.Rating,
            'Price': randomWine.Price.toFixed(2),
            'Year': randomWine.Year,
            'Type': randomWine.Type
        };

        return randomWineDict;
    }

    const [wine, setWine] = React.useState(getRandomWine());

    return (
        <View style={styles.container}>
            <HeaderBar />

            <View style={styles.textContainer}>
                <Text style={styles.goldLabelText}>
                    {wine.Rating} / 5{'\n'}
                    ${wine.Price}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.wineryText}>
                    {wine.Winery}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.nameText}>
                    {wine.Name}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.regionText}>
                    {wine.Region},{'\n'}
                    {wine.Country}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.yearText}>
                    {wine.Year}
                </Text>
            </View>

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

                <Image
                    source={require('../../Assets/Images/CornerVines.png')}
                    style={styles.cornerVinesImage}>
                </Image>

                <Image
                    source={require('../../Assets/Images/BottomVines.png')}
                    style={styles.bottomVinesImage}>
                </Image>
            </View>

            {/* Add information box with same wine metadata in plain text for readability 
            for those that English is not their native language */}

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    // Add function to save wine's ID (create incrementing ID in JSON file) 
                    // to AsyncStorage, then call the array in the favorite's page to display 
                    // as a list
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
        </View>
    );
}

export default Reveal;