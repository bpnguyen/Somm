/* 
* Somm - Favorites Screen 
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList,
    Alert,
    Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';
import { SafeAreaView } from 'react-native-safe-area-context';

const Favorites = (props) => {
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

    const [modalVisible, setModalVisible] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState('N/A')
    const getInfo = ({ item }) => {
        setSelectedItem(item)
        setModalVisible(true)
    }

    const ListItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <Text
                    style={styles.listText}
                    onPress={() => getInfo({ item })}>
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

            {/* <View style={styles.listContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => getFavorites()}>
                    <Text style={styles.pressableText}>
                        Refresh Favorites
                    </Text>
                </Pressable>
            </View> */}

            <SafeAreaView style={styles.listContainer}>
                <FlatList
                    data={favorites}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ListItem item={item} />}
                />

                <View style={styles.modalContainer}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Name:   {'\t'.repeat(5)} {selectedItem.Name}{'\n'}
                                Type:   {'\t'.repeat(6)} {selectedItem.Type}{'\n'}
                                Country:{'\t'.repeat(3)} {selectedItem.Country}{'\n'}
                                Region: {'\t'.repeat(4)} {selectedItem.Region}{'\n'}
                                Winery: {'\t'.repeat(4)} {selectedItem.Winery}{'\n'}
                                Year:   {'\t'.repeat(6)} {selectedItem.Year}{'\n'}
                                Rating: {'\t'.repeat(5)} {selectedItem.Rating}{'\n'}
                                Price:  {'\t'.repeat(6)} ${selectedItem.Price}
                            </Text>

                            <Pressable
                                style={styles.modalPressable}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.modalPressableText}>
                                    All done!
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            </SafeAreaView>

            {/* <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => clearAsync()}>
                    <Text style={styles.pressableText}>
                        {clearedText}
                    </Text>
                </Pressable>
            </View> */}

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => { getFavorites() }}>
                    <Text style={styles.pressableText}>
                        Refresh Favorites
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => { clearAsync() }}>
                    <Text style={styles.pressableText}>
                        {clearedText}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Favorites;