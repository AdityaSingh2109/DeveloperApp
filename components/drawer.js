import React , { useEffect, useState }from 'react';
import {StyleSheet, View,TouchableOpacity,Text,Image} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../views/redux/authSlice';
//import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const MyDrawer = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const navigateAndClose = (screen, params) => {
    navigation.navigate(screen, params);
    navigation.closeDrawer();
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
//To fetch current loggen in user username it is done via getting user info from async storage but can be simply done in one line using redux as user info is already fetched there via async storage
  // const[username,setusername]=useState('');
  // useEffect(()=>{
  //   const getUsername=async()=>{
  //     try{
  //       const userData=await AsyncStorage.getItem('user');
  //       if(userData)
  //     {
  //  const user=JSON.parse(userData);
  //  setusername(user.username);
  //     }
  //     }
  //     catch(error)
  //     {
  //       console.error("Error fetching username:", error);
  //     } 
  //   };
  //   getUsername();
  // },[]);

// using useSelector to get the username from the Redux store
  const username= useSelector(state=> state.auth.user?.username);

  return(
    <View style={styles.drawerContainer}>
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => navigation.closeDrawer()}
      >
        <Icon name="cross" size={30} color="#000" />
      </TouchableOpacity>
      <View style={{alignItems:'center'}}>
        <Image
          style={styles.image }
          source={{uri:'https://st2.depositphotos.com/2056297/7333/i/600/depositphotos_73331715-stock-photo-handsome-man.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
        <Text style={{fontSize:20}}>Hi,{username}</Text>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'JavaScript'})}>
          <Text style={styles.drawerOptionText}>JavaScript</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'ES-6'})}>
          <Text style={styles.drawerOptionText}>ES6</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'React'})}>
          <Text style={styles.drawerOptionText}>React</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'React Native'})}>
          <Text style={styles.drawerOptionText}>React-Native</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>My Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5}}>
        <TouchableOpacity 
          style={[styles.drawerOption, styles.logoutButton]} 
          onPress={handleLogout}
        >
          <Text style={[styles.drawerOptionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
   
const styles = StyleSheet.create({
     image: {
      width: 100,
      height: 100,
      borderColor: 'red',
      borderWidth: 2,
      borderRadius: 75
    },
    drawerOption:{
      paddingHorizontal:20,
      marginVertical:10
    },
    drawerOptionText:{
      fontSize:20,
      color:"#000000"
    },
     closeButton: {
    position: 'absolute',
    right: 10,
    top: 1,
    zIndex: 1,
    padding: 10
  },
    drawerContainer:{
      flexDirection:'column',
      alignContent:'center',
      marginTop:40,
      position: 'relative'
    },
    logoutButton: {
      backgroundColor: '#ff4444',
      borderRadius: 8,
      marginTop: 'auto',
      marginBottom: 20,
    },
    logoutText: {
      color: '#ffffff',
      textAlign: 'center',
    }
   });

   export default MyDrawer;