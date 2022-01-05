import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
 
const TutorialFooter = () => {
 return(
    <View style={styles.footer}>
     <View style={{flexDirection:'row',padding:6}}>
    <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle}>
       <Text style={styles.fotterText}>React</Text>
     </TouchableOpacity>
    </View>
     <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle}>
       <Text style={styles.fotterText}>React Native</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.row}>
    <TouchableOpacity style={styles.fotterTitle}>
       <Text style={styles.fotterText}> Redux         
         </Text>
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
    padding: 12
  },
  row:{
    marginHorizontal:5
  },
  fotterTitle:{
    paddingHorizontal:20
  },
  fotterText:{
    fontSize:20,
    color:"#fff"
  }
   
});

export default TutorialFooter;