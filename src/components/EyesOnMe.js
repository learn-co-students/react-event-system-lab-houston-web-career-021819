// Code EyesOnMe Component Here
import React, {Component} from 'react';
export default class EyesOnMe extends Component {
	constructor() {
		super()
	}

	render() {
		return <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}className="button" />
	}
}