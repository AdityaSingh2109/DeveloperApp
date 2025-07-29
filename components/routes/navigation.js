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
import MyDrawer from '../drawer';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();

function HomeWithBottomTab(){
return(
        <TabBottom.Navigator
          initialRouteName="HomeWithBottom"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Second') {
                iconName = 'book';
              } else if (route.name === 'Third') {
                iconName = 'code';
              } else if (route.name === 'Fourth') {
                iconName = 'user';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#26619c',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
        >
          <TabBottom.Screen name="Home" component={HomeScreen} />
          <TabBottom.Screen name="Second" component={HomeScreen} />
          <TabBottom.Screen name="Third" component={HomeScreen} />
          <TabBottom.Screen name="Fourth" component={HomeScreen} />
        </TabBottom.Navigator>
)}

function HomeDrawer() {
  return (
     
      <Drawer.Navigator
        //drawerPosition={global.language === 3 ? 'right' : 'left'}
        initialRouteName="HomeWithDrawer"
        drawerContent={(props) => <MyDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            width: 300,
          },
          headerShown: false
        }}
      >
        <Drawer.Screen name="HomeWithDrawer" component={HomeWithBottomTab} />
       </Drawer.Navigator>
  );
}
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}  />
        <Stack.Screen options={{ headerShown: false }} name="Forpass" component={Forgotpass} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeDrawer}  />
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