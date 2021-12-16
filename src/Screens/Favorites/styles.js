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
    listContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingTop: 10
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
    pressableContainer: {
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
    },
    modalContainer: {
        flex: 0,
        paddingTop: '35%',
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalPressable: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: "#fcb9b8"
    },
    modalPressableText: {
        color: "black",
        fontFamily: 'Courgette-Regular',
        fontSize: 18,
        textAlign: "center"
    },
    modalText: {
        color: 'black',
        fontFamily: 'PlayfairDisplaySC-Regular',
        fontSize: 18,
        paddingVertical: 5,
        marginBottom: 15
    }
})

export default styles;