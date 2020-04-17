import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  
  render() {
    console.log(this.props.bass);
    return this.props.bass.map((bas) => (
      <TodoItem key={bas.id} title={bas} markedCompleteTodoItem={this.props.markedCompleteTodos} deleteTodoItem={this.props.deleteTodos}/>
    ))
  }
}

Todos.propTypes ={
  bass:PropTypes.array.isRequired
}

export default Todos;
