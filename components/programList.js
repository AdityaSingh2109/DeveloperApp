import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableWithoutFeedbackBase, TouchableWithoutFeedback, StatusBar, Button } from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'React Introduction',
    defination:"ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013. Today, most of the websites are built using MVC (model view controller) architecture. In MVC architecture, React is the 'V' which stands for view, whereas the architecture is provided by the Redux or Flux. ",
    o:false
  },
  {id: '2',title: 'ES-6', defination:'', o:false},
  {id: '3',title: 'React-Native', defination:'', o:false},
  {id: '4',title: 'JavaScript', defination:'', o:false},
  {id: '5',title: 'ES-6', defination:'', o:false},
  {id: '6',title: 'React-Native', defination:'', o:false},
  {id: '7',title: 'JavaScript', defination:'', o:false},
  {id: '8',title: 'ES-6', defination:'', o:false},
  {id: '9',title: 'React-Native', defination:'', o:false},
  {id: '10',title: 'JavaScript', defination:'', o:false},
  {id: '11',title: 'ES-6', defination:'', o:false},
  {id: '12',title: 'ES-6', defination:'', o:false},
  {id: '13',title: 'React-Native', defination:'', o:false},
  {id: '14',title: 'JavaScript', defination:'', o:false},
  {id: '15',title: 'ES-6', defination:'', o:false},
  {id: '16',title: 'React-Native', defination:'', o:false},
  {id: '17',title: 'JavaScript', defination:'', o:false},
  {id: '18',title: 'ES-6', defination:'', o:false},
  {id: '19',title: 'React-Native', defination:'', o:false},
];

const Item = ({id, title}) =>{ 
 
  return(
    <View>
      <View style={[styles.item,{borderRadius:50,margin:4},id%2?{backgroundColor:"#fff"}:{backgroundColor:"#26619c"}]}>
      <TouchableWithoutFeedback onPress={()=>{}} >
          <View style={{alignItems:'center',marginHorizontal:30 }}>
            <Text style={[styles.title,id%2?{color:"#26619c"}:{color:"#fff"}]}>{title}</Text>
          </View>
      </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
 
const ProgramList = () => {
  const renderItem = ({ item }) => (
    <View>
       <Item id={item.id} title={item.title} defination={item.defination} open={item.o} />
    </View>
   
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{paddingBottom:10}}></View>}
        ListHeaderComponent={<View style={{paddingTop:5}}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:80
  },
  item: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    paddingVertical:10
    
  },
  title: {
    fontSize: 17,
    alignItems:'center',
    fontWeight:'600'

   },
  defTitle:{
      fontSize:14,
      color:'#26619c',
      lineHeight:20,
      fontWeight:'400'
  },
  defItem:{
    backgroundColor: '#fff',
    padding:14
  }
});

export default ProgramList;