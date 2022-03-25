import {Text, View} from 'react-native';
import React from 'react';
import styles from './HeaderSide.style';

const HeaderSide = ({counter}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>My Todo List</Text>
      <Text style={styles.header_text2}>{counter}</Text>
    </View>
  );
};

export default HeaderSide;
