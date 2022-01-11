import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgramDetailScreen from '../../views/programDetail';
import ProgramListScreen from '../../views/programList';
import TutorialScreen from '../../views/tutorial';
import HomeScreen from '../../views/home';
import TutorialDetailScreen from '../../views/tutorialDetail';
import Login from "../../views/login";
import Register from "../../views/register";
import CompilerScreen from '../../views/compiler'
import Forgotpass from '../../views/Forpass';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}  />
        <Stack.Screen options={{ headerShown: false }} name="Forpass" component={Forgotpass} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen}  />
        <Stack.Screen options={{ headerShown: false }} name="ProgramDetailScreen" component={ProgramDetailScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ProgramListScreen" component={ProgramListScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TutorialScreen" component={TutorialScreen} />
        <Stack.Screen options={{ headerShown: false }} name="TutorialDetailScreen" component={TutorialDetailScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CompilerScreen" component={CompilerScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
// const HomeScreen = ({ navigation }) => {
//     return (
//       <Button
//         title="Go to Javascript page"
//         onPress={() =>
//           navigation.navigate("JavaScript", { name: 'JavaScript' })
//         }
//       />
//     );
//   };
//   const ProfileScreen = ({ navigation, route }) => {
//     return <Text>This is {route.params.name}'s profile</Text>;
//   };

  export default MyStack;