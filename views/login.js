import React, { useState } from 'react';
import { StyleSheet ,Button, Text,Image , TextInput, View, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
// import { container, form } from '../styles';
import HomeScreen from './home';

// import { StyleSheet ,Button, Text,Image , TextInput, View } from 'react-native';
 
export default function Login({navigation}) {
    const [email, setEmail] = useState("abc@tftus.com");
    const [password, setPassword] = useState("password");
    const emailValidation=()=> {
        const regex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return !(!email || regex.test(email) === false);
    }
    const onSignUp = () => {
         const isEmailValid = emailValidation();
         if(isEmailValid){
            if(email=="abc@tftus.com" && password=="password"){
               {navigation.navigate("Home")}
            }
        }
    }

    return (
        <View style={container.center}>
            <View style={{marginVertical:20}}>
                <View style={{paddingHorizontal:20,marginVertical:40,alignItems:'center',alignContent:'center'}}>
                    <Text style={{fontSize:20,color:'#26619c'}}>React-Native App Development(Android)</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <Image
                    style={{width:300,height:300,borderRadius:150,}}
                    source={{uri:'https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'}}
                    resizeMode={"cover"}
                    />
                </View>
            </View>
            <View style={container.formCenter}>
                <TextInput
                    style={form.textInput}
                    placeholder="email"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={form.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <TouchableOpacity onPress={() =>navigation.navigate("Forpass")}>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button
                    style={form.button}
                    onPress={() => onSignUp()}
                    title="Sign In"
                />
                <TouchableOpacity>
                <Text
                    title="Register"
                    onPress={() =>navigation.navigate("Register")} >
                    Don't have an account? SignUp.
                </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={form.bottomButton} >
                <Text
                    title="Register"
                    onPress={() =>navigation.navigate("Register")} >
                    Don't have an account? SignUp.
                </Text>
            </View> */}

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
        marginBottom: 250,
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
        // borderTopWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
    roundImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }

})
const styles=StyleSheet.create({
    forgot_button: {
        height: 30,
        // marginBottom: 3,
        // marginTop: 3,
      },
})
