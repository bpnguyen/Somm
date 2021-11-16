/* 
* Somm - Reveal Screen Styles
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
    imageContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'goldenrod'
    },
    goldSpecklesImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    bottleImage: {
        resizeMode: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        // shadowColor: '#171717',
        // shadowOffset: {
        //     width: -3,
        //     height: 3
        // },
        // shadowRadius: 10,
        //opacity: 0.45
    },
    goldLabelImage: {
        resizeMode: 'center',
        width: '45%',
        height: '45%',
        position: 'relative',
        bottom: '18%',
        left: '10%'
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
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
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
    pressable: {
        width: '45%',
        backgroundColor: '#fcb9b8',
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 5
    },
    pressableText: {
        color: 'black',
        fontFamily: 'Satisfy-Regular',
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default styles;