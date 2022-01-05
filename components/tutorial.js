import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableWithoutFeedbackBase, TouchableWithoutFeedback, StatusBar, Button } from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'React Introduction',
    defination:"My Introduction  ",
    o:false
  },
  { 
    id: '2',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '3',
    title: 'React-Native',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '4',
    title: 'JavaScript',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '5',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '6',
    title: 'React-Native',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '7',
    title: 'JavaScript',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '8',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '9',
    title: 'React-Native',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '10',
    title: 'JavaScript',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '11',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '12',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '13',
    title: 'React-Native',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '14',
    title: 'JavaScript',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '15',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '16',
    title: 'React-Native',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '17',
    title: 'JavaScript',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '18',
    title: 'ES-6',
    defination:"My Introduction  ",
    o:false},
  { 
    id: '19',
    title: 'React-Native',
    defination:"My Introduction  ",
    o:false},
];

const Item = ({id, title,defination,navigation }) =>{ 
  const [Open,setOpen]=useState(false);

  return(
    <View>
      <View style={[styles.item,id%2?{backgroundColor:"#fff"}:{backgroundColor:"#26619c"}]}>
      <TouchableWithoutFeedback onPress={()=>(setOpen(Open?false:true))} >
        <View style={{flexDirection:'row'}}>
          <View style={{ flex:9,alignItems:'center',marginHorizontal:30 }}>
            <Text style={[styles.title,id%2?{color:"#26619c"}:{color:"#fff"}]}>{title}</Text>
          </View>
          <View style={{flex:1  }}>
            <Text style={[id%2?{color:"#26619c"}:{color:"#fff"},{fontSize:20}]}>#</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <Defination navigation={navigation} id={id} defination={defination} title={title} open={Open} />
    </View>
    
    
  )
}
const Defination = ({defination,open,navigation }) => (
  open?
    <View style={styles.defItem}>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('TutorialDetailScreen',{name:defination})}>
       <Text style={styles.defTitle}>{defination}</Text>
       </TouchableWithoutFeedback>
    </View>
  :null
  
);
const Tutorial = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View>
       <Item navigation={navigation} id={item.id} title={item.title} defination={item.defination} open={item.o} />
    </View>
   
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Tutorial;