import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/authSlice';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
import { clearError } from './redux/authSlice';
import { useFocusEffect } from '@react-navigation/native';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  
useFocusEffect(
  React.useCallback(() => {
    setEmail('');
    setPassword('');
    dispatch(clearError());
  }, [dispatch])
);
  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return !(!email || regex.test(email) === false);
  };

  const onSignUp = async () => {
    const isEmailValid = emailValidation();
    if (isEmailValid) {
      const success = await dispatch(loginUser(email, password));
      if (success) {
        navigation.navigate('Home');
      }
    }
  };

  const { width } = Dimensions.get('window');
useEffect(() => {
  dispatch(clearError());
}, []);

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
              <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <View style={{ width: width * 0.9, alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: width * 0.05,
                      color: '#26619c',
                      textAlign: 'center',
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    adjustsFontSizeToFit
                  >
                    React-Native App Development(Android)
                  </Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    borderRadius: (width * 0.7) / 2,
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
                placeholder="Enter your email"
                placeholderTextColor="#666"
                onChangeText={email => setEmail(email)}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
              <TextInput
                style={form.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                value={password}
                autoCapitalize="none"
                autoComplete="password"
              />
              <TouchableOpacity onPress={() => navigation.navigate('Forpass')}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
              </TouchableOpacity>
              <Button
                title={loading ? 'Signing In...' : 'Sign In'}
                onPress={onSignUp}
                disabled={loading}
              />
              <TouchableOpacity
                onPress={() => {
                  dispatch(clearError());
                  navigation.navigate('Register');
                }}
              >
                <Text style={{ marginTop: 15 }}>
                  Don't have an account? SignUp.
                </Text>
              </TouchableOpacity>
            </View>
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
  forgot_button: {
    height: 30,
    color: 'blue',
    marginBottom: 10,
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
