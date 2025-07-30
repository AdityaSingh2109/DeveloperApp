import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import { Snackbar } from 'react-native-paper';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState({ boolSnack: false, message: '' });

  const onRegister = () => {
    if (!name || !username || !email || !password) {
      setIsValid({ boolSnack: true, message: "Please fill out everything" });
      return;
    }
    if (password.length < 6) {
      setIsValid({ boolSnack: true, message: "Passwords must be at least 6 characters" });
      return;
    }
  };

  const { width } = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.center}>
            <View style={{ marginVertical: 20 }}>
              <View style={{ paddingHorizontal: 20, marginVertical: 20, alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: width * 0.05,
                    color: '#26619c',
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  adjustsFontSizeToFit
                >
                  React-Native App Development(Android)
                </Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: width * 0.6,
                    height: width * 0.6,
                    borderRadius: (width * 0.6) / 2,
                  }}
                  source={{
                    uri: 'https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>

            <View style={styles.formCenter}>
              <TextInput
                style={form.textInput}
                placeholder="Username"
                value={username}
                keyboardType="twitter"
                onChangeText={(username) =>
                  setUsername(
                    username
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .replace(/\s+/g, '')
                      .replace(/[^a-z0-9]/gi, '')
                  )
                }
              />
              <TextInput
                style={form.textInput}
                placeholder="Name"
                onChangeText={(name) => setName(name)}
              />
              <TextInput
                style={form.textInput}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
              />
              <TextInput
                style={form.textInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />

              <Button onPress={onRegister} title="Register" />

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ marginTop: 15 }}>Already have an account? SignIn.</Text>
              </TouchableOpacity>
            </View>

            <Snackbar
              visible={isValid.boolSnack}
              duration={2000}
              onDismiss={() => setIsValid({ boolSnack: false })}
            >
              {isValid.message}
            </Snackbar>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  formCenter: {
    justifyContent: 'center',
    marginHorizontal: 25,
    paddingBottom: 50,
  },
});

const form = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    borderColor: 'gray',
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
});
