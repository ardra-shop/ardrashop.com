import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NavigationBarComponent from './components/NavigationBarComponent';
import SearchResultComponent from './components/SearchResultComponent'
import SignUpFormComponent from './components/SignUpFormComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component{
	render() {
		return(
<<<<<<< Updated upstream
			<div className="backgroundimg">
				<BrowserRouter>
					<NavigationBarComponent/>
					<Switch>
						<Route exact path="/ardrashop.com" component={HomeComponent} />
						<Route exact path="/ardrashop.com/searchresult" component={SearchResultComponent} />
						<Route exact path="/ardrashop.com/signup" component={SignUpFormComponent} />
						<Redirect to="/ardrashop.com"/>
					</Switch>
				</BrowserRouter>
			</div>
=======
			<BrowserRouter>
				<NavigationBarComponent/>
				<Switch>
					<Route exact path="/ardrashop.com" component={HomeComponent} />
					<Route exact path="/ardrashop.com/searchresult" component={SearchResultComponent} />
					<Route exact path="/ardrashop.com/signup" component={SignUpFormComponent} />
					<Redirect to="/ardrashop.com"/>
            	</Switch>
				<FooterComponent/>
			</BrowserRouter>
>>>>>>> Stashed changes
		);
	}
}

export default App;
