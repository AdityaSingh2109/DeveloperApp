import React from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const Header = () => {
 return(
    <View style={styles.header}>
        <Text style={styles.txt}>React Tutorial</Text>
    </View>
 );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    // justifyContent: "center",
    padding: 16
  },
  txt: {
      fontSize:25,
      color: '#000',
  }
});

export default Header;