import React, { Component } from 'react';
import './App.css';
import NavigationBarComponent from './components/NavigationBarComponent';
import ShopComponent from './components/ShopComponent'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import SignUpFormComponent from './components/SignUpFormComponent';

class App extends Component{
	render() {
		return(
			<BrowserRouter>
				<NavigationBarComponent/>
				<Switch>
					<Route exact path="/ardrashop.com/shop" component={ShopComponent} />
					<Route exact path="/ardrashop.com/signup" component={SignUpFormComponent} />
					<Redirect to="/ardrashop.com" />
            	</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
