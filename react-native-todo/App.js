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
        {id: 0, title: 'Insult Jerry', done: false},
        {id: 1, title: 'Build something', done: false},
        {id: 2, title: 'Morty Mind Blowers', done: false}
      ]
    }
  }

  addNewTodo = () => {
    this.setState({
      todos: [
        {
          id: this.state.todos.length + 1,
          title: this.state.todoInput,
          done: false
        },
        ...this.state.todos
      ]
    });
  };

  toggleDone (item) {
    let todos = this.state.todos;
    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    })
    this.setState({todos});
  }

  removeTodo (item) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== item.id);
    this.setState({todos});
  }


  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="Pickle Rick List"/>
        <InputBar 
          // we use ()=> this.addNewTodo()inside the attributes
          // so we can manipulate data instead of refs
          addNewTodo={() => this.addNewTodo()}
          textChange={todoInput => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
        />

        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem 
                todoItem={item} 
                toggleDone={ ()=> this.toggleDone(item) }
                removeTodo={() => this.removeTodo(item)} 
              />
            )
          }}
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
