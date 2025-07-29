import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MainHeader from "../components/mainHeader";
import Home from "../components/home";
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#e6f9ff', flex: 1 }}>
      <View style={styles.drawerContainer}>
        <View style={styles.drawerIcon}>
          <TouchableOpacity 
            style={{ paddingHorizontal: 20 }} 
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <MainHeader title={'React Tutorial APP'} />
      </View>
      <Home />
    </View>
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
  drawerIcon: {
    marginHorizontal: 5,
    justifyContent: "center",
    marginLeft: -20
  }
});

export default HomeScreen;
