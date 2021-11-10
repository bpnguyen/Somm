/* Somm - Home Screen */

import React from 'react';
import {
    View,
    Text,
    Image,
    Button
} from 'react-native';
import styles from './styles.js';

const Home = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={require('../Assets/Background.png')}>
            </Image>
            <View style={styles.homeContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.homeSubheaderText}>
                        Welcome to
                    </Text>
                    <Text style={styles.homeHeaderText}>
                        Somm
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonDescText}>
                        Would you like a bottle?
                    </Text>
                    <Button
                        title='Indulge me!'
                        onPress={() => { }}>
                    </Button>
                    <Button
                        title='I want something specific!'
                        onPress={() => { }}>
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default Home;