/* 
* Somm - Header Bar Styles
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
        flex: 0,
        //flexDirection: 'row',
        width: '100%',
        paddingTop: 5,
    },
    text: {
        color: 'white',
        width: '100%',
        backgroundColor: '#ad423c',
        fontFamily: 'Pacifico-Regular',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 4,
        elevation: 5
    }
})

export default styles;