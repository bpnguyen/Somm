/* 
* Somm - Filters Screen Styles
* 
* Creator: Brian Nguyen (bnguyen3@luc.edu), Adeline Azungue (aazungue@luc.edu)
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
    pressableContainer: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    dropdownContainer: {
        width: '100%',
        backgroundColor: '#fcb9b8',
        paddingVertical: 1,
        borderRadius: 1,
        //elevation: 5
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
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default styles;