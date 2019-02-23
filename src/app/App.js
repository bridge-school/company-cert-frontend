import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

import { Homepage } from './components/Homepage';

class App extends Component {
	render() {
		return (
			<div>
				<Homepage />
			</div>
		);
	}
}

export default App;
