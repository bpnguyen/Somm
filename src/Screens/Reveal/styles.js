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
    },
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
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
    },
    wineryText: {
        color: 'black',
        fontFamily: 'Courgette-Regular',
        fontSize: 15,
        position: 'absolute',
        textAlign: 'center',
        lineHeight: 16,
        width: '25%',
        paddingTop: 450
    },
    nameText: {
        color: 'black',
        fontFamily: 'Pacifico-Regular',
        fontSize: 16,
        position: 'absolute',
        textAlign: 'center',
        lineHeight: 21,
        width: '25%',
        paddingTop: 575
    },
    regionText: {
        color: 'black',
        fontFamily: 'Courgette-Regular',
        fontSize: 14,
        position: 'absolute',
        justifyContent: 'flex-end',
        textAlign: 'center',
        width: '25%',
        lineHeight: 16,
        paddingTop: 710
    },
    yearText: {
        color: '#A8A8A8',
        fontFamily: 'Courgette-Regular',
        fontSize: 18,
        position: 'absolute',
        textAlign: 'center',
        width: '25%',
        paddingTop: 803
    },
    goldLabelImage: {
        resizeMode: 'center',
        width: '45%',
        height: '45%',
        position: 'relative',
        bottom: '18%',
        left: '10%'
    },
    goldLabelText: {
        color: 'black',
        fontFamily: 'Courgette-Regular',
        fontSize: 21,
        position: 'absolute',
        textAlign: 'center',
        lineHeight: 25,
        paddingTop: 287,
        paddingLeft: 80
    },
    cornerVinesImage: {
        resizeMode: 'center',
        width: '55%',
        height: '55%',
        position: 'absolute',
        top: '57%',
        left: '18%',
        opacity: 0.9
    },
    bottomVinesImage: {
        resizeMode: 'center',
        width: '55%',
        height: '55%',
        position: 'absolute',
        top: '68%',
        left: '23%',
        opacity: 0.6
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
        fontFamily: 'Courgette-Regular',
        fontSize: 16,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default styles;