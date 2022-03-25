/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Switch, View, Text} from 'react-native';
/* 
import Card from './components/Card'; */

const data =[
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

const App: () => Node = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showFavoriteList, setShowFavoriteList] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowFavoriteList(isFavoriteSelected);
    isFavoriteSelected 
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{textAlign: 'right', margin: 10,}}>Show Favorite</Text>
        <Switch value={showFavoriteList} onValueChange={onFavoritesChange}/>
      </View>
      <FlatList style={{textAlign: 'left', margin: 10}} data={cafeList} renderItem={({item})=> <Text>{item.name}</Text>}  />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 10,
  },
  container1: {
    flex:1,
    margin: 10,
    
  },
});

export default App;
