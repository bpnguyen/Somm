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

            {/* <View style={styles.test}>
                <Text style={{backgroundColor: 'grey', width: '100%', height: '100%', textAlign: 'center', flex: 1.25}}>{wine.Winery}</Text>
                <Text style={{backgroundColor: 'red', width: '100%', height: '100%', textAlign: 'center', flex: 2}}>{wine.Name}</Text>
                <Text style={{backgroundColor: 'grey', width: '100%', height: '100%', textAlign: 'center', flex: 1.25}}>{wine.Region},{'\n'}
                    {wine.Country}</Text>
            </View> */}

            <View style={styles.textContainer}>
                <Text style={styles.goldLabelText}>
                    {wine.Rating}/5{'\n'}
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
            {/* <View style={styles.pressableContainer}>
                <Text style={styles.pressableText}>
                    { wine.Rating }/5
                    ${ wine.Price }
                    { wine.Winery }
                    { wine.Name }
                    { wine.Region }
                    { wine.Country }
                    { wine.Year }
                </Text>
            </View> */}
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