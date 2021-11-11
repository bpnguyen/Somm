import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        opacity: 0.45
    },
    logoContainer: {
        width: '100%',
        height: '32%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ad423c",
        elevation: 15
    },
    logoHeaderText: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Pacifico-Regular',
        fontSize: 120,
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: '#171717',
        textShadowOffset: {
            width: -3,
            height: 3
        },
        textShadowRadius: 25,
        paddingBottom: 20
    },
    logoSubheaderText: {
        color: '#fcb9b8',
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
        textAlign: 'center',
        textShadowColor: '#171717',
        textShadowOffset: {
            width: -3,
            height: 3
        },
        textShadowRadius: 10,
        paddingTop: 20,
        paddingBottom: 80
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center'
    },
    buttonDescText: {
        color: 'black',
        fontFamily: 'Pacifico-Regular',
        fontSize: 30,
        textShadowColor: '#fcb9b8',
        textShadowOffset: {
            width: 0,
            height: 3
        },
        textShadowRadius: 10,
        paddingTop: 30
    },
    button: {
        width: '70%',
        backgroundColor: '#fcb9b8',
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 5
    },
    buttonText: {
        fontFamily: 'Satisfy-Regular',
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default styles;