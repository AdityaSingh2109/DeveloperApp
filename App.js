import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, Text, StyleSheet, View,TouchableOpacity } from "react-native";
import Header from "./components/header";
import Drawer from "./components/drawer";
import Footer from "./components/footer";
import Home from "./components/home";
const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[ styles.navigationContainer]}>
      <View style={styles.closeDrawer}>
        <TouchableOpacity style={{paddingHorizontal:20}}  
          onPress={() => drawer.current.closeDrawer()}
        >
          <Text style={styles.headerIcon}>X</Text>
        </TouchableOpacity>
      </View>
      <Drawer />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={220}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.drawerContainer}>
        <View style={ styles.drawerIcon}>
          <TouchableOpacity style={{paddingHorizontal:20}}  
            onPress={() => drawer.current.openDrawer()}>
            <Text style={styles.headerIcon}>#</Text>
          </TouchableOpacity>
        </View>
        <Header />
      </View>
      <Home />
      <Footer/>
    </DrawerLayoutAndroid>
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
    backgroundColor:'#fff',
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
    color:"#000000"
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

export default App;