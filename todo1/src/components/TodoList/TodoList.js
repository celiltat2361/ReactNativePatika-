/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import React from 'react';
import styles from './TodoList.style';
const ToDoList = ({ list ,press}) => {

  return (
    press
    ?
    <View style={styles.containerPress}>
      <Text style={styles.textPress}>{list.title}</Text>
    </View>
    :
    <View style={styles.container}>
      <Text style={styles.text}>{list.title}</Text>
    </View>
  );
};

export default ToDoList;
