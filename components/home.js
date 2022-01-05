import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,Image, StatusBar } from 'react-native';
const DATA = [
  {id: '1',title: 'JavaScript',},
  {id: '2',title: 'JS Program',},
  {id: '3',title: 'React-Native',},
  {id: '4',title: 'RN Program',},
  {id: '5',title: 'React',},
  {id: '6',title: 'React Program',},
  {id: '7',title: 'ES-6',},
  {id: '8',title: 'ES-6 Program',},
 ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={{alignItems:'center'}}>
        <Image
          style={{width:60,height:60,borderRadius:35} }
          source={{uri:'https://image.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg'}}
          resizeMode={"cover"}
        />
      </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    
 
  <FlatList

        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={()=>(<View style={{marginVertical:20}}>
        <View style={{alignItems:'center'}}>
        <Image
          style={{width:150,height:150,borderRadius:75,} }
          source={{uri:'https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'}}
          resizeMode={"cover"}
        />
      </View>
      <View style={{paddingHorizontal:20,marginVertical:10,alignItems:'center',alignContent:'center'}}>
        <Text style={{fontSize:20,color:'#26619c'}}>Android Development</Text>
      </View></View>)
      }

        keyExtractor={item => item.id}
        numColumns={2}
      />
 
      
     
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#fff',
    height:120,
    width:"45%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius:10,
    alignItems:'center',
    alignContent:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
  },
  title: {
    fontSize: 20,
    color:'#26619c'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
});

export default Home;