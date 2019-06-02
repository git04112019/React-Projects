import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Take out trash', done: false},
        {id: 1, title: 'Dishes', done: false}
      ]
    }
  }

    

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="Pickle Rick List"/>
        <InputBar 
          textChange={todoInput => this.setState({ todoInput })}
        />
        <Text> {this.state.todoInput} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  statusbar: {
    // backgroundColor: '#FFCE00',
    height: 20
  }, 
});
