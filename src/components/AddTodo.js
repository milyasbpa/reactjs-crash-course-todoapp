import React, { Component } from 'react'

class AddTodo extends Component {
    state={
        title:''
    }
    
    onSubmit = (events) => {
        events.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: ''});
    }

    onChange = (events) => {
        this.setState({ [events.target.name]: events.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={styleSubmit}>
                <input style={inputArea} type="text" onChange={this.onChange} name="title" placeholder="Add Todo.." />
                <input style={submitArea} type="submit" value="Submit" className="btn" />
            </form>
        )
    }
}

const styleSubmit={
    backgroundColor:'#8ee4af',
    padding:'20px'
}

const inputArea={
    borderRadius:'4px',
    border :'solid 2px #edf5e1',
    backgroundColor:'#379683',
    width:'60%',
    marginRight: '10px',
    height:'30px'
}

const submitArea={
    backgroundColor:'#379683',
    color: '#edf5e1',
    flex:'1',
    border:'none',
    width:'10%',
    height:'30px',
    borderRadius:'4px'
}

export default AddTodo;