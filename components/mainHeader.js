import React from 'react';
import {Text, StyleSheet, View } from "react-native";
const MainHeader = (props) => {
 return(
    <View style={styles.header}>
           {/* <FontAwesome name='heart' size={20} style={{color:'black'}}/>  */}
        <Text style={[styles.txt,props.bkColor?{color:"#fff"}:{color:'#000'}]}>{props.title}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
  header: {

   },
  txt: {
      fontSize:25,
      color: '#000',
      marginHorizontal:20
  }
});

export default MainHeader;