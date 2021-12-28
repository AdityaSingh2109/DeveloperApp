import React from 'react';
import { Button, StyleSheet, View } from "react-native";

const Drawer = () => {
    return(
       <View>
           
           <Button
             title="ES6"
           />
            <Button
             title="JavaScript"
           />
            <Button
             title="React Native"
           />
         </View>
    );
   };
   
//    const styles = StyleSheet.create({
//      header: {
//        backgroundColor: "#000",
//        alignItems: "center",
//        // justifyContent: "center",
//        padding: 16
//      },
//      txt: {
//          fontSize:25,
//          color: '#fff',
//      }
//    });

   export default Drawer;