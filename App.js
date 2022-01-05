import React, {  } from "react";
import { } from "react-native";
import HomeScreen from "./views/home";
import TutorialScreen from "./views/tutorial";
import ProgramDetailScreen from "./views/programDetail";
import ProgramListScreen from "./views/programList";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./components/routes/navigation"
const App = () => {
  
  return (
    <MyStack />
  );
};
 
export default App;
