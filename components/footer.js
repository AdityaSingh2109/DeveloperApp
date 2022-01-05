import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
const Footer = ({navigation}) => {
 return(
    <View style={styles.footer}>
     <View style={{flexDirection:'row',padding:6}}>
    <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle} onPress={() =>navigation.navigate("Home")} >
       <Text style={styles.fotterText}>Home</Text>
     </TouchableOpacity>
    </View>
     <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle} onPress={() =>navigation.navigate("TutorialScreen",{name:'Javascript'})}>
       <Text style={styles.fotterText}>JS</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle} onPress={() =>navigation.navigate("TutorialScreen",{name:'ES-6'})}>
       <Text style={styles.fotterText}>ES6</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle} onPress={() =>navigation.navigate("TutorialScreen",{name:'React-Native'})}>
       <Text style={styles.fotterText}>React-Native</Text>
     </TouchableOpacity>
    </View>
     </View>
    </View>
 );
};

const styles = StyleSheet.create({
  footer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16
  },
  row:{
    marginHorizontal:5
  },
  fotterTitle:{
    paddingHorizontal:20
  },
  fotterText:{
    fontSize:20,
    color:"#000000"
  }
   
});

export default Footer;