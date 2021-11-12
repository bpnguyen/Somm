/* 
* Somm - Navigation Bar Styles
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
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    navContainer: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10
    },
    button: {
        width: '50%',
        //height: '100%',
        backgroundColor: '#ad423c',
        //paddingVertical: 0,
        paddingBottom: 4,
        elevation: 5
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Pacifico-Regular',
        fontSize: 18,
        paddingVertical: 0,
        textAlign: 'center'
    },
    separator: {
        borderWidth: 0.6,
        borderColor: 'black'
    }
})

export default styles;