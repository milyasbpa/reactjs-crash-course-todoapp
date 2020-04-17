import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <h2 style={styleH2}>Todos App Bas Self Learned with React</h2>
        )
    }
}

const styleH2 ={
    backgroundColor:'#8ee4af',
    color: '#edf5e1'
}