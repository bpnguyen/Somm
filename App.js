import React from 'react';
import { 
    View, 
    Text,
    Image,
    ScrollView,
    TextInput
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
                <Image 
                    source = {{ uri: './Assets/BlankBottle.png' }}
                    style = {{ width: 200, height: 200}}
                />
            </View>
            <TextInput
                style = {{
                    height: 40, 
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue = 'Please type something in here!'
            />
        </ScrollView>
    );
}

export default Somm;