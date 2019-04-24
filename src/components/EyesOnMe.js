// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {   // In JS, one element can only have one eventListener?
    
     focus = () =>{
         console.log('Good!')
     }

     blur = () => {
         console.log('Hey! Eyes on me!')
     }

    render(){
        return(
            <button onFocus = {this.focus} onBlur = {this.blur}/>
        )
    }
}