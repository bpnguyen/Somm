import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    logoContainer: {
        width: '100%',
        backgroundColor: "#ad423c"
    },
    buttonContainer: {
        //padding: '10px 0px 10px 0px',
        //paddingVertical: '10px'
    },
    backgroundImage: {
        position: 'absolute',
        opacity: 0.45
    },
    homeHeaderText: {
        color: 'white',
        fontSize: 72,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    homeSubheaderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonDescText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default styles;