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


    var wineArr = [];
    var regionArr = [];
    var countryArr = [];

    //componenetWillMount()
    const filterType = () => {
        for (var i = 0; i < winesJson.length; i++) {
            var type = winesJson[i].Type
            //if(wineArr.contains(type)){
            wineArr.push(type)
        } //else{}

        console.log(wineArr)
        return wineArr;
    }

    var wanted = wineArr.filter(function (item) { return (wineArr.Type == 'Red'); });

    const filterRegion = () => {
        for (var i = 0; i < winesJson.length; i++) {
            var region = winesJson[i].Region
            regionArr.push(region)
        }
    }

    const filterCountry = () => {
        for (var i = 0; i < winesJson.length; i++) {
            var country = winesJson[i].Country
            countryArr.push(country)
        }
    }


    const parseJSON = () => {
        console.log(winesJson[0]); // Print first element
        console.log(winesJson[0].Type); // Print 'Type' value of first element
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
            <HeaderBar/>
        
            <DropDownPicker
                items={[
                    {label: 'Red', value: 'red', selected: true},
                    {label: 'White', value: 'white'},
                    {label: 'Sparkling', value: 'sparkling'}

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
                    onPress={() => App()}>
                    <Text style={styles.navigationPressableText}>
                        Test parseJSON function
                    </Text>
                </Pressable>
            </View>

        </View>
    );

}

export default Filters;
