import React from 'react';
import {Text, StyleSheet, View } from "react-native";

const Header = () => {
 return(
    <View style={styles.header}>
        <Text style={styles.txt}>React Tutorial</Text>
    </View>
 );
};

const styles = StyleSheet.create({
  header: {
     
    alignItems: "center",
    justifyContent: "center",
    marginLeft:70
  },
  txt: {
      fontSize:25,
      color: '#000',
      
  }
});

export default Header;