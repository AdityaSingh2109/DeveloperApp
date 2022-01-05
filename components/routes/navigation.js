import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgramDetailScreen from '../../views/programDetail';
import ProgramListScreen from '../../views/programList';
import TutorialScreen from '../../views/tutorial';
import HomeScreen from '../../views/home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{  }}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="programDetail" component={ProgramDetailScreen} />
        <Stack.Screen name="programList" component={ProgramListScreen} />
        <Stack.Screen name="tutorial" component={TutorialScreen} />
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