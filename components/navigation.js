import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JavaScript from "./JavaScript";
import Home from "./home";
import ES6 from './ES6';
import R from "./React";
import {Button} from "react-native";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="JavaScript" component={JavaScript} />
        <Stack.Screen name="ES6" component={ES6} />
        <Stack.Screen name="React" component={R} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Javascript page"
        onPress={() =>
          navigation.navigate("JavaScript", { name: 'JavaScript' })
        }
      />
    );
  };
  const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

  export default HomeScreen;