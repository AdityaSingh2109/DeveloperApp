import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text,Image  } from "react-native";

const Drawer = () => {
  return(
    <View style={styles.drawerContainer}>
      <View style={{alignItems:'center'}}>
        <Image
          style={styles.image }
          source={{uri:'https://st2.depositphotos.com/2056297/7333/i/600/depositphotos_73331715-stock-photo-handsome-man.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
        <Text style={{fontSize:20}}>Hi, Annu</Text>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>JavaScript</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>ES6</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>React</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>React-Native</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>My Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>Logout</Text>
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
    drawerContainer:{
      flexDirection:'column',
      alignContent:'center',
      marginTop:40
    }
   });

   export default Drawer;