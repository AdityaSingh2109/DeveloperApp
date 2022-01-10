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
const JavaScriptTutorial=[
  {
    id:1,
    name:'JS Home',
    link:'https://www.w3schools.com/js/default.asp',
    o:false
  },

  {
    id:2,
    name:'JS Introduction',
    link:'https://www.w3schools.com/js/js_intro.asp',
    o:false

  },
  {
    id:3,
    name:'JS Where To',
    link:'https://www.w3schools.com/js/js_whereto.asp',
    o:false
  },
  {
    id:4,
    name:'JS Output',
    link:'https://www.w3schools.com/js/js_output.asp',
    o:false
  },
  {
    id:5,
    name:'JS Statements',
    link:'https://www.w3schools.com/js/js_statements.asp',
    o:false
  },
  {
    id:6,
    name:'JS Syntax',
    link:'https://www.w3schools.com/js/js_syntax.asp',
    o:false
  },
  {
    id:7,
    name:'JS Comments',
    link:'https://www.w3schools.com/js/js_comments.asp',
    o:false
  },
  {
    id:8,
    name:'JS Variable',
    link:'https://www.w3schools.com/js/js_variables.asp',
    o:false
  },
  {
    id:9,
    name:'JS Let',
    link:'https://www.w3schools.com/js/js_let.asp',
    o:false
  },
  {
    id:10,
    name:'JS Const',
    link:'https://www.w3schools.com/js/js_const.asp',
    o:false
  },
  {
    id:11,
    name:'JS Operator',
    link:'https://www.w3schools.com/js/js_operators.asp',
    o:false
  },
  {
    id:12,
    name:'JS Arithmetic',
    link:'https://www.w3schools.com/js/js_arithmetic.asp',
    o:false
  },
  {
    id:13,
    name:'JS Assignment',
    link:'https://www.w3schools.com/js/js_assignment.asp',
    o:false
  },
  {
    id:14,
    name:'JS Data Type',
    link:'https://www.w3schools.com/js/js_datatypes.asp',
    o:false
  },
  {
    id:15,
    name:'JS Function',
    link:'https://www.w3schools.com/js/js_functions.asp',
    o:false
  },{
    id:16,
    name:'JS Object ',
    link:'',
    o:false
  },{
    id:17,
    name:'JS Events',
    link:'',
    o:false
  },{
    id:18,
    name:'JS Strings',
    link:'',
    o:false
  },{
    id:19,
    name:'JS String Method',
    link:'',
    o:false
  },{
    id:20,
    name:'JS String Search',
    link:'',
    o:false
  },{
    id:21,
    name:'JS String Templates',
    link:'',
    o:false
  },{
    id:22,
    name:'JS Numbers',
    link:'',
    o:false
  },{
    id:23,
    name:'JS Number Methods',
    link:'',
    o:false
  },{
    id:24,
    name:'JS Array',
    link:'',
    o:false
  },{
    id:25,
    name:'JS Array Method',
    link:'',
    o:false
  },{
    id:26,
    name:'JS Array Sort',
    link:'',
    o:false
  },{
    id:27,
    name:'JS Array Iteration',
    link:'',
    o:false
  },{
    id:28,
    name:'JS Array Const',
    link:'',
    o:false
  },{
    id:29,
    name:'JS Dates',
    link:'',
    o:false
  },{
    id:30,
    name:'JS Date ',
    link:'',
    o:false
  },{
    id:31,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:32,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:33,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:34,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:35,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:36,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:37,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:38,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:39,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:40,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:41,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:42,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:43,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:44,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:45,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:46,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:47,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:48,
    name:'JS Home',
    link:'',
    o:false
  },{
    id:49,
    name:'JS Home',
    link:'',
    o:false
  } 
] 
const ES6Tutorial =[
  {
    id:1,
    name:'ES6 Home',
    link:'https://www.w3schools.com/js/default.asp'
  },
]
const ReactTutorial = [
  {
    id:1,
    name:'React Home',
    link:'https://www.w3schools.com/js/default.asp'
  },
]
const ReactNativeTutorial=[
  {
    id:1,
    name:'ReactNative Home',
    link:'https://www.w3schools.com/js/default.asp'
  },
];
const Item = ({id, title,defination,navigation,link }) =>{ 
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
    <Defination navigation={navigation} id={id} defination={defination} title={title} link={link} open={Open} />
    </View>
    
    
  )
}
const Defination = ({defination,link,open,navigation }) => (
  open?
    <View style={styles.defItem}>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('TutorialDetailScreen',{name:defination,link:link})}>
       <Text style={styles.defTitle}>{'Click Here To See Defination of '+defination}</Text>
       </TouchableWithoutFeedback>
    </View>
  :null
  
);
const Tutorial = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View>
       <Item navigation={navigation} id={item.id} title={item.name} defination={item.name} open={item.o} link={item.link} />
    </View>
   
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={JavaScriptTutorial}
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