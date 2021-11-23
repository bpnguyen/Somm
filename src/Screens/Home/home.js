/* 
* Somm - Home Screen 
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
// import NavigationBar from '../../Components/NavigationBar/navigationbar.js';

const Home = (props) => {
    // const { navigation, atHome, setAtHome, atFavorites, setAtFavorites } = props;
    const { navigation } = props;

    const fromHomeToReveal = () => {
        navigation.navigate('Reveal');
        //setAtHome(false); // Function not being identified?
    };

    const fromHomeToFilters = () => {
        navigation.navigate('Filters');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../Assets/Images/Background.png')}
                style={styles.backgroundImage}>
            </Image>
            <View style={styles.homeContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoSubheaderText}>
                        Welcome to
                    </Text>
                    <Text style={styles.logoHeaderText}>
                        Somm
                    </Text>
                </View>
                <View style={styles.pressableContainer}>
                    <Text style={styles.pressableDescText}>
                        Would you like a bottle?
                    </Text>
                    <View style={styles.pressableContainer}>
                        <Pressable
                            style={styles.navigationPressable}
                            onPress={() => fromHomeToReveal()}>
                            <Text style={styles.navigationPressableText}>
                                Indulge me!
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.pressableContainer}>
                        <Pressable
                            style={styles.navigationPressable}
                            onPress={() => fromHomeToFilters()}>
                            <Text style={styles.navigationPressableText}>
                                I want something else...
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            {/* <NavigationBar
                atHome={atHome}
                atFavorites={atFavorites}
            /> */}
        </View>
    );
}

export default Home;