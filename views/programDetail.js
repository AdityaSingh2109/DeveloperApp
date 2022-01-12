import React from "react";
import { Text, StyleSheet, View,TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/header";
import Icon from 'react-native-vector-icons/Entypo';
 
export default function ProgramDetailScreen ({route,navigation}) {
  const { name } = route.params;
  return (
    <>
    <View style={styles.Container}>
      <View style={ styles.Icon}>
        <TouchableOpacity style={{paddingHorizontal:20}}  
          onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}><Icon name="back" size={30} color="#000" /></Text>
        </TouchableOpacity>
      </View>
      <Header title={(name)} bkColor={true}/>
    </View>
    <ScrollView>

    <View style={{paddingVertical:10,paddingHorizontal:20,marginTop:2,backgroundColor:'green'}}>
        <Text style={{color:"#fff",fontSize:15,fontWeight:'800'}}>1. Program of {(name)}</Text>
    </View>
    <View style={{paddingVertical:10,paddingHorizontal:20}}>
    <Text style={{color:'#000',fontSize:12}}>{
    `import React, {Component} from 'react';  
     import {Platform, StyleSheet, Text, View} from 'react-native';  
     export default class App extends Component<Props> {  
     render() {  
        return (  
            <View style={styles.container}>  
               <Text style={styles.welcome}>Welcome to React Native!</Text>  
               <Text style={styles.instructions}>To get started, edit App.js 
               </Text>  
               <Text style={styles.instructions}>{instructions}</Text>  
            </View>  
        );  
       }  
     }`}</Text>      
    </View> 
    <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'#26619c'}}>
        <Text style={{color:"#fff",fontSize:15,fontWeight:'800'}}>OUTPUT :-</Text>
    </View>
    <View style={{paddingVertical:20,paddingHorizontal:20}}>
    <Text style={{color:'#000'}}> Hello From React native</Text>    
    </View> 
    </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  Container:{ 
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
  Icon:{
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

 