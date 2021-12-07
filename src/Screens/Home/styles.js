/* 
* Somm - Home Screen Styles
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        opacity: 0.45
    },
    homeContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: '100%',
        height: '26%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ad423c",
        elevation: 15
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
        paddingTop: 15,
        paddingBottom: 80
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
        paddingBottom: 25
    },
    pressableContainer: {
        display: 'flex',
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center'
    },
    pressableDescText: {
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
    navigationPressable: {
        width: '70%',
        backgroundColor: '#fcb9b8',
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 5
    },
    navigationPressableText: {
        color: 'black',
        fontFamily: 'Satisfy-Regular',
        fontSize: 24,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default styles;