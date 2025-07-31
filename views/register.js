import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './redux/authSlice';
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
import { clearError } from './redux/authSlice';

export default function Register({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState({ boolSnack: false, message: '' });

  const emailValidation = email => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const onRegister = async () => {
    // Validation
    if (!name || !username || !email || !password) {
      setIsValid({ boolSnack: true, message: 'Please fill out everything' });
      return;
    }
    if (password.length < 6) {
      setIsValid({
        boolSnack: true,
        message: 'Password must be at least 6 characters',
      });
      return;
    }
    if (!emailValidation(email)) {
      setIsValid({ boolSnack: true, message: 'Please enter a valid email' });
      return;
    }

    // Register user
    const userData = {
      username,
      name,
      email,
      password, // In a real app, you should hash the password
      createdAt: new Date().toISOString(),
    };

    const success = await dispatch(registerUser(userData));

    if (success) {
      setIsValid({ boolSnack: true, message: 'Registration successful!' });
      // Clear form
      setUsername('');
      setName('');
      setEmail('');
      setPassword('');
      // Navigate to login after short delay
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1000);
    }
  };
useEffect(() => {
  dispatch(clearError());
}, []);

  const { width } = Dimensions.get('window');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.center}>
            <View style={{ marginVertical: 20 }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginVertical: 20,
                  alignItems: 'center',
                }}
              >
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
              {error && <Text style={styles.errorText}>{error}</Text>}
              <TextInput
                style={form.textInput}
                placeholder="Username"
                value={username}
                keyboardType="twitter"
                onChangeText={username =>
                  setUsername(
                    username
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .replace(/\s+/g, '')
                      .replace(/[^a-z0-9]/gi, ''),
                  )
                }
              />
              <TextInput
                style={form.textInput}
                placeholder="Name"
                onChangeText={name => setName(name)}
              />
              <TextInput
                style={form.textInput}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
              />
              <TextInput
                style={form.textInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              />

              <Button
                onPress={onRegister}
                title={loading ? 'Registering...' : 'Register'}
                disabled={loading}
              />

              <TouchableOpacity
                onPress={() => {
                  dispatch(clearError());
                  navigation.navigate('Login');
                }}
              >
                <Text style={{ marginTop: 15 }}>
                  Already have an account? SignIn.
                </Text>
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
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
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
