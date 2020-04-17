import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return{
            color: '#edf5e1',
            backgroundColor: this.props.title.completed ? '#8ee4af' : '#379683',
            padding:'5px'
        }
    }

    render() {
        // console.log(this.props.title);
        const {id,title} =this.props.title;
        return (
            <div style={this.getStyle()}>
                <h3>
                    <input type="checkbox" style={styleCheckBox} onChange={this.props.markedCompleteTodoItem.bind(
                        this, id
                    )} />
                    {title}
                    <button style={styleDelBox} onClick={this.props.deleteTodoItem.bind(this, id)}>X</button>
                </h3>
            </div>
        )
    }
}

TodoItem.propTypes ={
    title:PropTypes.object.isRequired
  }

const styleCheckBox ={
    borderRadius:'50%',
    margin:'0px 10px'
}

const styleDelBox ={
    margin:'0px 10px'
}
export default  TodoItem;