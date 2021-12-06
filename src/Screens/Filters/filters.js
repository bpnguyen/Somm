/* 
* Somm - Filters Screen 
* 
* Creator: Adeline Azungue (aazungue@luc.edu), Brian Nguyen (bnguyen3@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
} from 'react-native';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';
import DropDownPicker from 'react-native-dropdown-picker';
import winesJson from '../../Assets/Data/Wines.json';
import text from '../../Components/text.js';

const Filters = (props) => {
    const { navigation } = props;

    const fromFiltersToReveal = () => {
        navigation.navigate('Reveal');
    };

    var typesArr = [];
    const getTypes = () => {
        for (let i = 0; i < winesJson.length; i++) {
            if (!typesArr.includes(winesJson[i].Type)) {
                typesArr.push(winesJson[i].Type);
            }
        }
    };

    var countriesArr = [];
    const getCountries = () => {
        for (let i = 0; i < winesJson.length; i++) {
            if (!countriesArr.includes(winesJson[i].Country)) {
                countriesArr.push(winesJson[i].Country);
            }
        }
    };

    var regionsArr = [];
    const getRegions = () => {
        for (let i = 0; i < winesJson.length; i++) {
            if (!regionsArr.includes(winesJson[i].Region)) {
                regionsArr.push(winesJson[i].Region);
            }
        }
    };

    const parseJSON = () => {
        getTypes();
        console.log(typesArr);
        console.log();

        getCountries();
        console.log(countriesArr);
        console.log();

        getRegions();
        console.log(regionsArr);
        console.log();
    };

    //     const result = winesJson.filter(type => type.Type == "Red");
    //     const random = result[Math.floor(Math.random()*result.length)];
    //     console.log(random);

    // let input = '';
    // let filterArr = [];

    // const UserInput = () => {
    //     //let input = '';
    //     const saveUserInput = userInput => {
    //       input = userInput;

    //       //setTimeout(() => {  console.log(input); }, 2000); 

    //     };

    //         return (
    //             <View>
    //                 <TextInput
    //                     style={styles.input}
    //                     onChangeText={userInput => saveUserInput(userInput)}
    //                 />
    //                 <TextInput
    //                     style={styles.input}
    //                 />
    //             </View>
    //         );
    //     };


    return (
        <View style={styles.container}>
            <HeaderBar />

            <DropDownPicker
                items={[
                    { label: 'Red', value: 'red', selected: true },
                    { label: 'White', value: 'white' },
                    { label: 'Sparkling', value: 'sparkling' }

                ]}
                defaultNull
                placeholder="Select Wine Color"
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={item => console.log(item.label, item.value)}
            />
            {/* <UserInput
                multiline
                numberOfLines={1}
                onChangeText={text => onChangeCountry(text)}
                //value={value}
                style={{ padding: 10 }}
            /> */}

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => fromFiltersToReveal()}>
                    <Text style={styles.navigationPressableText}>
                        Uncork the bottle!
                    </Text>
                </Pressable>
            </View>

            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => parseJSON()}>
                    <Text style={styles.navigationPressableText}>
                        Test parseJSON function
                    </Text>
                </Pressable>
            </View>

        </View>
    );

}

export default Filters;
