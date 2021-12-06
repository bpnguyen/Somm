import React, { useState } from 'react'

function App(props) {
    const [name, setName] = useState('')
    console.log(name);


    const result = winesJson.filter(type => type.Type == "Red");
    const random = result[Math.floor(Math.random() * result.length)];
    console.log(random);

    let input = '';
    let filterArr = [];

    const UserInput = () => {
        // //let input = '';
        // const saveUserInput = userInput => {
        //     input = userInput;

        //     //setTimeout(() => {  console.log(input); }, 2000); 

        // };

        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    //onChangeText={userInput => saveUserInput(userInput)}
                />
                <TextInput
                    style={styles.input}
                />
                <UserInput
                multiline
                numberOfLines={1}
                //onChangeText={text => onChangeCountry(text)}
                //value={value}
                style={{ padding: 10 }}
            />
            </View>
            
        );
    };

    // return (
    //     <input
    //         type='text'
    //         name='firstName'
    //         onChange={(e) => setName(e.target.value)}
    //         value={name}
    //     />
    // )
}

//export default UserInput;