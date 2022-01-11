import React  from "react";
import {   Text, StyleSheet, View,TouchableOpacity } from "react-native";
import MainHeader from "../components/mainHeader";
import Footer from "../components/footer";
import Home from "../components/home";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons';

 export default function HomeScreen() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const navigation = useNavigation();
  // const myButton = (
  //   <Icon.Button
  //     name="facebook"
  //     backgroundColor="#3b5998"
  //     // onPress={this.loginWithFacebook}
  //   >
  //   </Icon.Button>
  // );
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
    <View style={{backgroundColor:'#e6f9ff'}}>
      <View style={styles.drawerContainer}>
        <View style={ styles.drawerIcon}>
          <TouchableOpacity style={{paddingHorizontal:20}}  
            onPress={() => navigation.toggleDrawer()}>
            <Text style={styles.headerIcon}>#</Text>
          </TouchableOpacity>
        </View>
        <MainHeader title={'React Tutorial APP'} />
      </View>
      <Home navigation={navigation}/>
      {/* <View style={{position:'absolute',bottom:70}}>
      <Footer navigation={navigation}/>
      </View> */}
    </View>
     
     
    
  
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