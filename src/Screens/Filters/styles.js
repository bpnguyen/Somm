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
    navigationPressable: {
        width: '70%',
        backgroundColor: '#fcb9b8',
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3
    },
    navigationPressableText: {
        color: 'black',
        fontFamily: 'Satisfy-Regular',
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
    },
    filtersContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    dropdownContainer: {
        display: 'flex', 
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fcb9b8',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 5,
        elevation: 4
    },
    dropdownLabel: {
        backgroundColor: '#ad423c',
        color: 'white',
        fontFamily: 'Pacifico-Regular',
        fontSize: 18,
        textAlign: 'center',
        width: '20%',
        height: '100%',
        borderRadius: 10,
        paddingTop: 3
    },
    dropdownBoxContainer: {
        width: '70%'
    },
    dropdownBoxText: {
        fontFamily: 'Satisfy-Regular',
        fontSize: 20,
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