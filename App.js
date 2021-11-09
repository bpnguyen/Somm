import React from 'react';
import { 
    View, 
    Text,
    Image,
    ScrollView,
    TextInput,
    StyleSheet,
    ImageBackground
} from 'react-native';

const Somm = () => {
    return (
        <ScrollView>
            <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <Text>Welcome to</Text>
                <Text>Somm</Text>

                <View style = {{
                    flex: 1, 
                    height: 500
                }}>
                    <Image 
                        source = {require('./Assets/BlankBottle.png')}
                        style = {{ 
                            flex: 1,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
            </View>
            <TextInput
                style = {{
                    height: 40, 
                    borderColor: 'gray',
                    borderWidth: 1,
                    textAlign: 'center'
                }}
                defaultValue = 'Please type something in here!'
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 36,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0'
    }
})

export default Somm;