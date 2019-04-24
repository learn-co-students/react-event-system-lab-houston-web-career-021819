// Code Keypad Component Here
import React, {Component} from 'react';
export default class KeyPad extends Component {
	constructor() {
		super()
	}

	render() {
		return <input type="password" onKeyUp={() => console.log('Entering password...')} />
	}
}
