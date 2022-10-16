import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

export default class ConditionalRendaring extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {

        const {isLoggedIn} = this.state

        // let element;
        // if(isLoggedIn){
        //     element = <HomePage></HomePage>
        // }else{
        //     element = <LogInPage></LogInPage>
        // }

        return(
            <div>
                {isLoggedIn ? <HomePage /> : <LogInPage/>}
                {/* ^ tarnary operator system */}
                {/* {isLoggedIn && <HomePage/>} shortcircuit system */}
            </div>
        )
    }
}
