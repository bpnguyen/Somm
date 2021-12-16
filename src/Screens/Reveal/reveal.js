/* 
* Somm - Reveal Screen 
* 
* Creators: Brian Nguyen (bnguyen3@luc.edu), Adeline Azungue (aazungue@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';
import winesJson from '../../Assets/Data/Wines.json'

const Reveal = (props) => {
    const { navigation } = props;

    const [addedText, setAddedText] = React.useState('Add to Favorites')
    const onAddFavorites = event => setAddedText('Added!')

    const getRandomWine = () => {
        const randomWine = winesJson[Math.floor(Math.random() * winesJson.length)];
        return randomWine;
    }

    const [wine, setWine] = React.useState(getRandomWine());
    
    let wineDict = {
        'Name': wine.Name.substring(0, (wine.Name.length - 5)),
        'Country': wine.Country,
        'Region': wine.Region,
        'Winery': wine.Winery,
        'Rating': wine.Rating,
        'Price': wine.Price.toFixed(2),
        'Year': wine.Year,
        'Type': wine.Type
    };

    const writeItemToStorage = async (key, jsonObj) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(jsonObj))
        } catch(error) {
            console.log('ERROR: There was an issue writing to AsyncStorage.')
        }
    }

    return (
        <View style={styles.container}>
            <HeaderBar />

            <View style={styles.textContainer}>
                <Text style={styles.goldLabelText}>
                    {wineDict.Rating} / 5{'\n'}
                    ${wineDict.Price}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.wineryText}>
                    {wineDict.Winery}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.nameText}>
                    {wineDict.Name}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.regionText}>
                    {wineDict.Region},{'\n'}
                    {wineDict.Country}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.yearText}>
                    {wineDict.Year}
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

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    // Add function to save wine's ID (create incrementing ID in JSON file) 
                    // to AsyncStorage, then call the array in the favorite's page to display 
                    // as a list
                    onPress={() => { onAddFavorites(), writeItemToStorage(wine.Name, wine) }}>
                    <Text style={styles.pressableText}>
                        { addedText }
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => { setWine(getRandomWine()), setAddedText('Add to Favorites') }}>
                    <Text style={styles.pressableText}>
                        Another bottle, please!
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Reveal;