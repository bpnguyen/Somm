/* 
* Somm - Favorites Screen Styles
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
    pressableContainer: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    listItem: {
        width: '100%',
        backgroundColor: '#ffdab9',
        paddingTop: 5,
        elevation: 1
    },
    listText: {
        color: 'black',
        fontFamily: 'PlayfairDisplaySC-Regular',
        fontSize: 20,
        paddingVertical: 5,
        textAlign: 'center'
    },
    listDivider: {
        height: 1,
        width: "100%",
        backgroundColor: "#c4c3d0"
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
        fontSize: 18,
        paddingVertical: 5,
        textAlign: 'center'
    }
})

export default styles;