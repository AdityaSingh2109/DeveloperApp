
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

// Screens
import ProgramDetailScreen from '../../views/programDetail';
import ProgramListScreen from '../../views/programList';
import TutorialScreen from '../../views/tutorial';
import HomeScreen from '../../views/home';
import TutorialDetailScreen from '../../views/tutorialDetail';
import Login from '../../views/login';
import Register from '../../views/register';
import CompilerScreen from '../../views/compiler';
import Forgotpass from '../../views/Forpass';
import MyDrawer from '../drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const TabBottom = createBottomTabNavigator();

//  Bottom Tabs
function HomeWithBottomTab() {
  return (
    <TabBottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Second') iconName = 'book';
          else if (route.name === 'Third') iconName = 'code';
          else if (route.name === 'Fourth') iconName = 'user';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#26619c',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <TabBottom.Screen name="Home" component={HomeScreen} />
      <TabBottom.Screen name="Second" component={HomeScreen} />
      <TabBottom.Screen name="Third" component={HomeScreen} />
      <TabBottom.Screen name="Fourth" component={HomeScreen} />
    </TabBottom.Navigator>
  );
}

//  Drawer
function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeWithDrawer"
      drawerContent={(props) => <MyDrawer {...props} />}
      screenOptions={{
        drawerStyle: { width: 300 },
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeWithDrawer" component={HomeWithBottomTab} />
    </Drawer.Navigator>
  );
}

//Auth Stack 
export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Forpass" component={Forgotpass} />
  </Stack.Navigator>
);

//App Stack
export const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeDrawer} />
    <Stack.Screen name="ProgramDetailScreen" component={ProgramDetailScreen} />
    <Stack.Screen name="ProgramListScreen" component={ProgramListScreen} />
    <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
    <Stack.Screen name="TutorialDetailScreen" component={TutorialDetailScreen} />
    <Stack.Screen name="CompilerScreen" component={CompilerScreen} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
