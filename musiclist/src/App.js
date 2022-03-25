/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import type {Node} from 'react';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/';

import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

const App: () => Node = () => {

  const [list, setList] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item}/>;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filtered = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    })
    setList(filtered);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
   borderWidth: 1,
   borderColor: '#e0e0e0',
  },
});
