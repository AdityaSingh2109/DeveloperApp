import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text,Image} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

const MyDrawer = (props) => {
  const { navigation } = props;

  const navigateAndClose = (screen, params) => {
    navigation.navigate(screen, params);
    navigation.closeDrawer();
  };

  return(
    <View style={styles.drawerContainer}>
      <TouchableOpacity 
        style={styles.closeButton} 
        onPress={() => navigation.closeDrawer()}
      >
        <Icon name="cross" size={30} color="#000" />
      </TouchableOpacity>
      <View style={{alignItems:'center'}}>
        <Image
          style={styles.image }
          source={{uri:'https://st2.depositphotos.com/2056297/7333/i/600/depositphotos_73331715-stock-photo-handsome-man.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
        <Text style={{fontSize:20}}>Hi, Annu</Text>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'JavaScript'})}>
          <Text style={styles.drawerOptionText}>JavaScript</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'ES-6'})}>
          <Text style={styles.drawerOptionText}>ES6</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'React'})}>
          <Text style={styles.drawerOptionText}>React</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption} onPress={() => navigateAndClose("TutorialScreen", {name: 'React Native'})}>
          <Text style={styles.drawerOptionText}>React-Native</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>My Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:5, }}>
        <TouchableOpacity style={styles.drawerOption}>
          <Text style={styles.drawerOptionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
   
   const styles = StyleSheet.create({
     image: {
      width: 100,
      height: 100,
      borderColor: 'red',
      borderWidth: 2,
      borderRadius: 75
    },
    drawerOption:{
      paddingHorizontal:20,
      marginVertical:10
    },
    drawerOptionText:{
      fontSize:20,
      color:"#000000"
    },
     closeButton: {
    position: 'absolute',
    right: 10,
    top: 1,
    zIndex: 1,
    padding: 10
  },
    drawerContainer:{
      flexDirection:'column',
      alignContent:'center',
      marginTop:40,
      position: 'relative'
    }
   });

   export default MyDrawer;