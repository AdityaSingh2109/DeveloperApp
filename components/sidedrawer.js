import React, { useRef, useState } from "react";
import {Drawer} from "./drawer";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
const Sd = () => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");
    // const changeDrawerPosition = () => {
    //   // if (drawerPosition === "left") {
    //   //   setDrawerPosition("right");
    //   // } else {
    //   //   setDrawerPosition("left");
    //   // }
    // };
    
    const navigationView = () => (
      <View style={[styles.container, styles.navigationContainer]}>
        {/* <Text style={styles.paragraph}>I'm in the Drawer!</Text> */}
        <Drawer />
        <Button
          title="Close"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    );
  
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          
          {/* <Text style={styles.paragraph}>
            Drawer on the {drawerPosition}!
          </Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          <Text style={styles.paragraph}>
            Swipe from the side or press button below to see it!
          </Text> */}
          <Button
            title="Open"
            onPress={() => drawer.current.openDrawer()}
          />
        </View>
        
      </DrawerLayoutAndroid>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: "center",
      // justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    }
  });
  
  export default Sd;