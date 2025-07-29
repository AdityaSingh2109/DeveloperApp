import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import MainHeader from "../components/mainHeader";
import MyDrawer from "../components/drawer";
import Footer from "../components/footer";
import Home from "../components/home";
import Icon from 'react-native-vector-icons/Entypo';


const HomeScreen = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={styles.closeDrawer}>
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => drawer.current.closeDrawer()}>
          <Text style={styles.headerIcon}>X</Text>
        </TouchableOpacity>
      </View>
      <MyDrawer />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={{ backgroundColor: '#e6f9ff', flex: 1 }}>
        <View style={styles.drawerContainer}>
          <View style={styles.drawerIcon}>
            <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => drawer.current.openDrawer()}>
              <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <MainHeader title={'React Tutorial APP'} />
        </View>

        <Home />
        {/* <View style={{ position: 'absolute', bottom: 70 }}>
          <Footer />
        </View> */}
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 20,
    flexDirection: 'row',
    alignContent: "center",
    backgroundColor: '#fff'
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  headerIcon: {
    fontSize: 25,
    color: "#000000"
  },
  drawerIcon: {
    marginHorizontal: 5,
    justifyContent: "center",
    marginLeft: -20
  },
  closeDrawer: {
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: -10,
    zIndex: 1
  }
});

export default HomeScreen;
