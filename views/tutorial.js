import React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";
import Header from "../components/header";
import TutorialFooter from "../components/tutorialFooter";
import Tutorial from "../components/tutorial";
export default function TutorialScreen () {
  return (
    <>
    <View style={styles.drawerContainer}>
      <View style={ styles.drawerIcon}>
        <TouchableOpacity style={{paddingHorizontal:20}}  
          onPress={() => {}}>
          <Text style={styles.headerIcon}>#</Text>
        </TouchableOpacity>
      </View>
      <Header title={'React Native tutorial'} bkColor={true}/>
    </View>
    <Tutorial/>
    <TutorialFooter/>
    </>
  );
};

const styles = StyleSheet.create({
  drawerContainer:{ 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    padding:20,
    flexDirection:'row',
    alignContent:"center",
    backgroundColor:'#003153',
    shadowColor:'red'
   },
  navigationContainer: {
   },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  headerIcon:{
    fontSize:25,
    color:"#fff"
  },
  drawerIcon:{
    marginHorizontal:5,
    justifyContent:"center",
    marginLeft:-20
  },
  closeDrawer:{
    marginHorizontal:5,
    justifyContent:"center" ,
    alignItems:'center',
    position:'absolute',
    top:8,
    right:-10
  }
});

 