import React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";
import MainHeader from "../components/mainHeader";
import CompilerWeb from "../components/compilerWeb";
import {useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Entypo";

const CompilerScreen = ({route}) => {
    const navigation = useNavigation();
    const { name,link } = route.params;

  return (
    <>
    <View style={styles.drawerContainer}>
      <View style={ styles.drawerIcon}>
        <TouchableOpacity style={{paddingHorizontal:20}}  
          onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}><Icon name="back" size={30} color="#000" /></Text>
        </TouchableOpacity>
      </View>
      <MainHeader title={(name)} bkColor={true}/>

    </View>
         <CompilerWeb link={link} />

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

 export default CompilerScreen;