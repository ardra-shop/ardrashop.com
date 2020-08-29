import React, { Component } from 'react';
import './App.css';
import NavigationBarComponent from './components/NavigationBarComponent'
import {BrowserRouter} from 'react-router-dom';

class App extends Component{
	render() {
		return(
			<BrowserRouter>
				<div>
					<NavigationBarComponent/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
