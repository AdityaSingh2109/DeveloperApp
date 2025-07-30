import React, { useEffect } from "react";
import { } from "react-native";
import MyStack from "./components/routes/navigation"
import Forgotpass from "./views/Forpass";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <MyStack />
    // <Forgotpass />
  );
};
 
export default App;
