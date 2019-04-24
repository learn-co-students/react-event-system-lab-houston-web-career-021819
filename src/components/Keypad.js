// Code Keypad Component Here
import React, { Component } from 'react';
export default class Keypad extends Component{
    
    typeInPassword =()=>{
      console.log('Entering password...')
    }

    render(){
        return(
            <input onKeyUp = {this.typeInPassword} type = "password"/>
        )
    }
}