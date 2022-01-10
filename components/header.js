import React from 'react';
import {Text, StyleSheet, View } from "react-native";
const Header = (props) => {
 return(
    <View style={styles.header}>
           {/* <FontAwesome name='heart' size={20} style={{color:'black'}}/>  */}
        <Text style={[styles.txt,props.bkColor?{color:"#fff"}:{color:'#000'}]}>{props.title}{props.program?' Program':' Tutorial'}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
  header: {

   },
  txt: {
      fontSize:25,
      color: '#000',
      marginHorizontal:10,
      paddingRight:20
  }
});

export default Header;