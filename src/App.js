import React, { Component } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuidv4} from 'uuid';


import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:uuidv4(),
        title:'Jalan-jalan sore',
        completed: false
      },
      {
        id:uuidv4(),
        title:'Cuci piring',
        completed: false
      },
      {
        id:uuidv4(),
        title:'Nonton film',
        completed: false
      }
    ],
  }

  markedComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      // Proses pengecekan
      if (todo.id === id) {
        todo.completed= !todo.completed;
      } return todo
    })})
  }

  // ... untuk mengambil semua komponen dalam state todos yang tidak sama id nya
  // idenya menggunakan filter untuk meloloskan yang tidak di delete
  delTodos=(id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo ={
      id:uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos,newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo AddTodo={this.addTodo}/>
        <Todos bass={this.state.todos} markedCompleteTodos={this.markedComplete} deleteTodos={this.delTodos}/>
        </div>
      </div>
    )
  }
}

export default App;
