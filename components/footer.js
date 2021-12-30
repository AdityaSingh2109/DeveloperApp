import React from 'react';
import {Button,Text, StyleSheet, View } from "react-native";

const Footer = () => {
 return(
    <View style={styles.footer}>
        <View>
        <Button
        title="Home"
      />
        </View>
        <View>
        <Button
        title="JS"
      />
        </View>
        <View>
        <Button
        title="ES6"
      />
        </View>
        <View>
        <Button
        title="React-Native"
      />
        {/* <Text style={styles.txt}>React Tutorial</Text> */}
        </View>
    </View>
 );
};

const styles = StyleSheet.create({
  footer: {
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

export default Footer;