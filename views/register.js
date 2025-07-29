// import firebase from 'firebase';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Button, Text, TextInput,Image , View } from 'react-native';
import { Snackbar } from 'react-native-paper';
// import { container, form } from '../styles';
// require('firebase/firestore');

export default function Register({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isValid, setIsValid] = useState(true);

    const onRegister = () => {
        if (name.length == 0 || username.length == 0 || email.length == 0 || password.length == 0) {
            setIsValid({ bool: true, boolSnack: true, message: "Please fill out everything" })
            return;
        }
        if (password.length < 6) {
            setIsValid({ bool: true, boolSnack: true, message: "passwords must be at least 6 characters" })
            return;
        }
        if (password.length < 6) {
            setIsValid({ bool: true, boolSnack: true, message: "passwords must be at least 6 characters" })
            return;
        }
    }
    return (
        <View style={container.center}>
            <View style={{marginVertical:20}}>
                <View style={{alignItems:'center'}}>
                    <Image
                        style={{width:150,height:150,borderRadius:75,} }
                        source={{uri:'https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'}}
                        resizeMode={"cover"}
                    />
                </View>
                {/* <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
                    <Text style={{fontSize:20,color:'#26619c'}}>Welcome, New User</Text>
                </View> */}
                <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
                    <Text style={{fontSize:20,color:'#26619c'}}>React-Native (Android) Development</Text>
                </View>    
            </View>
            <View style={container.formCenter}>
                <TextInput
                    style={form.textInput}
                    placeholder="Username"
                    value={username}
                    keyboardType="twitter"
                    onChangeText={(username) => setUsername(username.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').replace(/[^a-z0-9]/gi, ''))}
                />
                <TextInput
                    style={form.textInput}
                    placeholder="name"
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    style={form.textInput}
                    placeholder="email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={form.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                <Button
                    style={form.button}
                    onPress={() => onRegister()}
                    title="Register"
                />
                <TouchableOpacity>
                <Text
                    title="Register"
                    onPress={() =>navigation.navigate("Login")} >
                    Already have an account? SignIn.
                </Text>
                </TouchableOpacity>
            </View>

            {/* <View style={form.bottomButton} >
                <Text
                    onPress={() =>navigation.navigate("Login")} >
                    Already have an account? SignIn.
                </Text>
            </View> */}
            <Snackbar
                visible={isValid.boolSnack}
                duration={2000}
                onDismiss={() => { setIsValid({ boolSnack: false }) }}>
                {isValid.message}
            </Snackbar>
        </View>

    )
}
const container = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        flexDirection: 'row'
    },
    input: {
        flexWrap: "wrap"
    },
    containerPadding: {
        flex: 1,
        padding: 15
    },
    center: {
        flex: 1,
    },
    horizontal: {
        flexDirection: 'row',
        display: 'flex',
    },
    form: {
        flex: 1,
        margin: 25
    },
    profileInfo: {
        padding: 25,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',

    },
    formCenter: {
        justifyContent: 'center',
        flex: 1,
        margin: 25
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        aspectRatio: 1 / 1,
    },
    fillHorizontal: {
        flexGrow: 1,
        paddingBottom: 0
    },
    imageSmall: {
        aspectRatio: 1 / 1,
        height: 70
    },
    gallery: {

        borderWidth: 1,
        borderColor: 'gray',
    },
    splash: {
        padding: 200,
        height: '100%',
        width: '100%'
    },
    chatRight: {
        margin: 10,
        marginBottom: 10,
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 8,
        alignSelf: 'flex-end'

    },
    chatLeft: {
        margin: 10,
        marginBottom: 10,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 8,
        alignItems: 'flex-end',
        textAlign: 'right',
        alignSelf: 'flex-start'
    }
})

const form = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        borderColor: 'gray',
        backgroundColor: 'whitesmoke',
        padding: 10,
        borderWidth: 1,
        borderRadius: 8
    },
    bottomButton: {
        alignContent: 'center',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
    roundImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }

})