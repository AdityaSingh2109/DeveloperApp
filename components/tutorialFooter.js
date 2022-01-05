import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
 
const TutorialFooter = ({navigation,title}) => {
 return(
    <View style={styles.footer}>
     <View style={{flexDirection:'row',padding:6}}>
    <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle} onPress={() =>navigation.navigate("TutorialScreen",{name:title})}>
       <Text style={styles.fotterText}>Tutorial</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.row}>
    <View style={styles.fotterTitle}>
       <Text style={styles.fotterText}>|</Text>
     </View>
    </View>
     <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle} onPress={()=>navigation.navigate('ProgramListScreen',{name:title})}>
       <Text style={styles.fotterText}>Program</Text>
     </TouchableOpacity>
    </View>
     </View>
    </View>
 );
};

const styles = StyleSheet.create({
  footer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    backgroundColor: "#003153",
    alignItems: "center",
    padding: 5
  },
  row:{
    marginHorizontal:5
  },
  fotterTitle:{
    paddingHorizontal:20
  },
  fotterText:{
    fontSize:30,
    color:"#fff"
  }
   
});

export default TutorialFooter;