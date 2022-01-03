import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
const DATA = [
  {id: '1',title: 'JavaScript',},
  {id: '2',title: 'ES-6',},
  {id: '3',title: 'React-Native',},
  {id: '4',title: 'JavaScript',},
  {id: '5',title: 'ES-6',},
  {id: '6',title: 'React-Native',},
  {id: '7',title: 'JavaScript',},
  {id: '8',title: 'ES-6',},
  {id: '9',title: 'React-Native',},
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
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
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 18,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;