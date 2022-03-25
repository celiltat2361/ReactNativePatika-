/* eslint-disable prettier/prettier */
import { View, Button, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './ButtonSave.style';

const ButtonArea = ({ todo, setTodo }) => {

  const [todoValue, setTodoValue] = useState('');
  const [color, setColor] = useState('#37474F');

  const Separator = () => (
    <View style={styles.separator} />
  );

  const handleSubmit = (item) => {
    if (item === '') {
      return Alert.alert('please fill this field');
    } else if (todo.some(todoItem => todoItem.title === item)) {
      return Alert.alert('this event already exists');
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: todoValue,
        pressed:false,
      };
      setTodo([...todo, newTodo]);
      setTodoValue('');
      setColor('#37474F');
    }
  };


  return (
    <View style={styles.container}>
      <TextInput placeholder="Write your task" style={styles.text_input} value={todoValue} onChangeText={setTodoValue} />
      <Separator />
      <View style={styles.button}>
        <Button style={styles.button1} title="Add" color="#FFA500" onPress={()=>handleSubmit(todoValue)} />
      </View>
    </View>
  );
};

export default ButtonArea;

