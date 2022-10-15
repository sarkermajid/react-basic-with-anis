import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    handleIncrement = () => {

        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {

        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        const {count} = this.state


        const counterStyle = {
            backgroundColor: 'black',
            padding: '20px',
            color:'white',
            textAlign:'center'
        }

        const buttonStyle = {
            backgroundColor: 'red',
            color: 'black',
            padding: '20px',
            fontSize:'20px',
            marginRight:'10px',
            borderRadius:'10px'
        }


        return (
            <div style={counterStyle}>
                <h1>Counter: {count}</h1>
                <button style={buttonStyle} onClick={this.handleIncrement} disabled={count===5 ? true : false}>+</button>
                <button style={buttonStyle} onClick={this.handleDecrement} disabled={count===0 ? true : false}>-</button>
            </div>
        )
    }
}