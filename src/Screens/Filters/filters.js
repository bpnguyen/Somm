/* 
* Somm - Filters Screen 
* 
* Creators: Zac Neuhardt (zneuhardt@luc.edu), Brian Nguyen (bnguyen3@luc.edu), Adeline Azungue (aazungue@luc.edu)
*/

import React, { useCallback } from 'react';
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
        console.log(typesArr);
        console.log()

        getCountries();
        console.log(countries);
        console.log(countriesArr);
        console.log()

        getRegions();
        console.log(regions);
        console.log(regionsArr);
        console.log();
    };

    const [openType, setOpenType] = React.useState(false);
    const [valueType, setValueType] = React.useState(null);
    const [itemsType, setItemsType] = React.useState(types);

    const onTypeOpen = useCallback(() => {
        setOpenCountries(false), setOpenRegions(false);
        }, []);

    const [openCountries, setOpenCountries] = React.useState(false);
    const [valueCountries, setValueCountries] = React.useState(null);
    const [itemsCountries, setItemsCountries] = React.useState(countries);

    const onCountryOpen = useCallback(() => {
            setOpenType(false), setOpenRegions(false);
            }, []);

    const [openRegions, setOpenRegions] = React.useState(false);
    const [valueRegions, setValueRegions] = React.useState(null);
    const [itemsRegions, setItemsRegions] = React.useState(regions);

    const onRegionOpen = useCallback(() => {
            setOpenCountries(false), setOpenType(false);
            }, []);

    return (
        <View style={styles.container}>

            <HeaderBar />

                {/* Use modal boxes? in which native device has a scrollable box to choose,
                would remove overlapping issue and just updates the chosen filter text value */}

                <View style={styles.filtersContainer}>
                <View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>
                        Type:
                    </Text>
                    <DropDownPicker

                        open={openType}
                        value={valueType}
                        items={itemsType}
                        setOpen={setOpenType}
                        setValue={setValueType}
                        setItems={setItemsType}
                        defaultIndex={0}
                        onOpen={onTypeOpen}
                        placeholder='Select a Type'
                        onPress={() => getTypes()}
                        containerStyle={styles.dropdownBoxContainer}
                        textStyle={styles.dropdownBoxText}
                        //dropDownContainerStyle={{ zIndex:3000 }}
                    />
                </View>

                <View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>
                        Country:
                    </Text>
                    <DropDownPicker
                        //zIndex={9}
                        open={openCountries}
                        value={valueCountries}
                        items={itemsCountries}
                        setOpen={setOpenCountries}
                        setValue={setValueCountries}
                        setItems={setItemsCountries}
                        defaultIndex={0}
                        onOpen={onCountryOpen}
                        placeholder='Select a Country'
                        onPress={() => getCountries()}
                        containerStyle={styles.dropdownBoxContainer}
                        textStyle={styles.dropdownBoxText}
                        //dropDownContainerStyle={{ zIndex:2000 }}
                    />
                </View>

                 <View style={styles.dropdownContainer}>
                    <Text style={styles.dropdownLabel}>
                        Region:
                    </Text>
                     <DropDownPicker
                        //zIndex={8}
                        open={openRegions}
                        value={valueRegions}
                        items={itemsRegions}
                        setOpen={setOpenRegions}
                        setValue={setValueRegions}
                        setItems={setItemsRegions}
                        defaultIndex={0}
                        onOpen={onRegionOpen}
                        placeholder='Select a Region'
                        onPress={() => getRegions()}
                        containerStyle={styles.dropdownBoxContainer}
                        textStyle={styles.dropdownBoxText}
                        //dropDownContainerStyle={{ zIndex:1000 }}
                     />
                 </View>

                <View style={styles.pressableContainer}>
                    <Pressable
                        style={styles.navigationPressable}
                        onPress={() => fromFiltersToReveal()}>
                        <Text style={styles.navigationPressableText}>
                            Uncork the bottle!
                        </Text>
                    </Pressable>
                </View>
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
