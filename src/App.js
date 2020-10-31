import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NavigationBarComponent from './components/NavigationBarComponent';
import SearchResultComponent from './components/SearchResultComponent'
import SignUpFormComponent from './components/SignUpFormComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import NoSearchResultComponent from './components/NoSearchResultComponent';
import ThankYouPageComponent from './components/ThankYouPageComponent';

class App extends Component{
	render() {
		return(
			<div className="backgroundimg">
				<BrowserRouter>
					<NavigationBarComponent/>
					<Switch>
						<Route exact path="/ardrashop.com" component={HomeComponent} />
						<Route exact path="/ardrashop.com/searchresult" component={SearchResultComponent} />
						<Route exact path="/ardrashop.com/signup" component={SignUpFormComponent} />
						<Route exact path="/ardrashop.com/nosearchresult" component={NoSearchResultComponent} />
						<Route exact path="/ardrashop.com/thankyoupage" component={ThankYouPageComponent} />
						<Redirect to="/ardrashop.com"/>
					</Switch>
					<FooterComponent/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
