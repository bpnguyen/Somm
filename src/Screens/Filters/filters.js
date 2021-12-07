/* 
* Somm - Filters Screen 
* 
* Creator: Adeline Azungue (aazungue@luc.edu), Brian Nguyen (bnguyen3@luc.edu), Zac Neuhardt (zneuhardt@luc.edu)
*/

import React from 'react';
import {
    View,
    Text,
    Pressable,
    TextInput,
} from 'react-native';

import styles from './styles.js';
import HeaderBar from '../../Components/HeaderBar/headerbar.js';
import DropDownPicker from 'react-native-dropdown-picker';
import winesJson from '../../Assets/Data/Wines.json';

const Filters = (props) => {

    const { navigation } = props;

    const fromFiltersToReveal = () => {
        navigation.navigate('Reveal');
    };

    var types = [{ label: 'N/A', value: 'N/A' }];
    const getTypes = () => {
        let typesArr = [];
        for (let i = 0; i < winesJson.length; i++) {
            if (!typesArr.includes(winesJson[i].Type)) {
                typesArr.push(winesJson[i].Type);
            }
        }

        for (let i = 0; i < typesArr.length; i++) {
            let dict = {
                label: typesArr[i],
                value: typesArr[i]
            };
            types.push(dict);
        }
    };

    var countries = [{ label: 'N/A', value: 'N/A'}];
    const getCountries = () => {
        let countriesArr = [];
        for (let i = 0; i < winesJson.length; i++) {
            if (!countriesArr.includes(winesJson[i].Country)) {
                countriesArr.push(winesJson[i].Country);
            }
        }

        for (let i = 0; i < countriesArr.length; i++) {
            let dictC = {
                label: countriesArr[i],
                value: countriesArr[i]
         };
         countries.push(dictC);
        }
    };

    var regions = [{ label: 'N/A', value: 'N/A'}];
    const getRegions = () => {
        let regionsArr = [];
        for (let i = 0; i < winesJson.length; i++) {
            if (!regionsArr.includes(winesJson[i].Region)) {
                regionsArr.push(winesJson[i].Region);
            }
        }

        for (let i = 0; i < regionsArr.length; i++) {
            let dictR = {
                label: regionsArr[i],
                value: regionsArr[i]
        };
        regions.push(dictR);
        }
    };

    const parseJSON = () => {
        getTypes();
        console.log(types);
        console.log();

        getCountries();
        console.log(countries);
        console.log();

        getRegions();
        console.log(regions);
        console.log();
    };

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [itemsType, setItemsType] = React.useState(types);

    const [openCountries, setOpenCountries] = React.useState(false);
    const [valueCountries, setValueCountries] = React.useState(null);
    const [itemsCountries, setItemsCountries] = React.useState(countries);

    const [openRegions, setOpenRegions] = React.useState(false);
    const [valueRegions, setValueRegions] = React.useState(null);
    const [itemsRegions, setItemsRegions] = React.useState(regions);

    return (
        <View style={styles.container}>

            <HeaderBar />

                <View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>
                        Type:
                    </Text>
                    <DropDownPicker

                        open={open}
                        value={value}
                        items={itemsType}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItemsType}
                        defaultIndex={0}
                        onPress={() => getTypes()}
                        containerStyle={styles.dropdownBoxContainer}
                        textStyle={styles.dropdownBoxText}
                        dropDownContainerStyle={{ zIndex:3000 }}
                    />
                </View>

                {/*<View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>
                        Country:
                    </Text>
                    <DropDownPicker
                        zIndex={9}
                        open={openCountries}
                        value={valueCountries}
                        items={itemsCountries}
                        setOpen={setOpenCountries}
                        setValue={setValueCountries}
                        setItems={setItemsCountries}
                        defaultIndex={0}
                        onPress={() => getCountries()}
                        containerStyle={styles.dropdownBoxContainer}
                        textStyle={styles.dropdownBoxText}
                        dropDownContainerStyle={{ zIndex:2000 }}
                    />
                </View>

                 <View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>
                        Region:
                    </Text>
                     <DropDownPicker
                        zIndex={8}
                        open={openRegions}
                        value={valueRegions}
                        items={itemsRegions}
                        setOpen={setOpenRegions}
                        setValue={setValueRegions}
                        setItems={setItemsRegions}
                        defaultIndex={0}
                        onPress={() => getRegions()}
                        containerStyle={styles.dropdownBoxContainer}
                        textStyle={styles.dropdownBoxText}
                        dropDownContainerStyle={{ zIndex:1000 }}
                     />
                 </View> */}

                <View style={styles.pressableContainer}>
                    <Pressable
                        style={styles.navigationPressable}
                        onPress={() => fromFiltersToReveal()}>
                        <Text style={styles.navigationPressableText}>
                            Uncork the bottle!
                        </Text>
                    </Pressable>
                </View>

                {/* <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.navigationPressable}
                    onPress={() => parseJSON()}>
                    <Text style={styles.navigationPressableText}>
                        Test parseJSON function
                    </Text>
                </Pressable>
            </View> */}
            </View>
    );

}

export default Filters;
