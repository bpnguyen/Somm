/* 
* Somm - Favorites Screen 
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';

const ToBeTried = (props) => {
    const { navigation } = props;

    const [mounted, setMounted] = React.useState(false)

    // const fromToBeTriedToHaveTried = () => {
    //     setMounted(false)
    //     navigation.navigate('HaveTried');
    // };

    const [favorites, setFavorites] = React.useState()

    const getFavorites = async () => {
        try {
            setClearedText('Clear all Favorites?')

            const keys = await AsyncStorage.getAllKeys()

            const results = []
            for (let i = 0; i < keys.length; i++) {
                let item = await AsyncStorage.getItem(keys[i])
                results.push(JSON.parse(item))
            }

            setFavorites(results)
        } catch (error) {
            console.log('ERROR: There was an issue reading from AsyncStorage.')
        }
    }

    if (!mounted) {
        getFavorites()
    }

    React.useEffect(() => {
        setClearedText('Clear all Favorites?')
        setMounted(true)
    }, [])

    const ListItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listText}>
                    {item.Name}
                </Text>

                <View style={styles.listDivider} />
            </View>

        )
    }

    const [clearedText, setClearedText] = React.useState('Clear all Favorites?')

    const clearAsync = async () => {
        try {
            await AsyncStorage.clear()
            getFavorites()
            setClearedText('Cleared!')
            console.log('Async cleared!')
        } catch (e) {
            console.log('ERROR: Unsuccessful clearing.')
        }
    }

    return (
        <View style={styles.container}>
            <HeaderBar />

            {/* <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => fromToBeTriedToHaveTried()}>
                    <Text style={styles.navigationPressableText}>
                        Go to: Have Tried
                    </Text>
                </Pressable>
            </View> */}

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => getFavorites()}>
                    <Text style={styles.pressableText}>
                        Refresh Favorites
                    </Text>
                </Pressable>
            </View>

            <FlatList
                data={favorites}
                renderItem={({ item }) => <ListItem item={item} />}
            />

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => clearAsync()}>
                    <Text style={styles.pressableText}>
                        {clearedText}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default ToBeTried;