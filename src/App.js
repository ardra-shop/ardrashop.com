import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NavigationBarComponent from './components/NavigationBarComponent';
import SearchResultComponent from './components/SearchResultComponent'
import RegisterFormComponent from './components/RegisterFormComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import NoSearchResultComponent from './components/NoSearchResultComponent';
import ThankYouPageComponent from './components/ThankYouPageComponent';
import ProductDetailPage from './components/ProductDetailPage';
import UnsubscribedComponent from './components/UnsubscribedComponent';
import UnsubscribeComponent from './components/UnsubscribeComponent';

class App extends Component{
	render() {
		return(
			<div className="backgroundimg">
				<BrowserRouter>
					<NavigationBarComponent/>
					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route exact path="/searchresult" component={SearchResultComponent} />
						<Route exact path="/nosearchresult" component={NoSearchResultComponent} />
						<Route exact path="/thankyoupage" component={ThankYouPageComponent} />
						<Route exact path="/register" component={RegisterFormComponent} />
						<Route exact path="/unsubscribed" component={UnsubscribedComponent}/>
						<Route exact path="/unsubscribe" component={UnsubscribeComponent}/>
						<Route path="/productdetail/:productid" component={ProductDetailPage} />
						<Redirect to="/"/>
					</Switch>
					<FooterComponent/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
