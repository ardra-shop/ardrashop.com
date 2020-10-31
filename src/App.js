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
						<Route exact path="/ardrashop.com" component={HomeComponent} />
						<Route exact path="/ardrashop.com/searchresult" component={SearchResultComponent} />
						<Route exact path="/ardrashop.com/nosearchresult" component={NoSearchResultComponent} />
						<Route exact path="/ardrashop.com/thankyoupage" component={ThankYouPageComponent} />
						<Route exact path="/ardrashop.com/register" component={RegisterFormComponent} />
						<Route exact path="/ardrashop.com/unsubscribed" component={UnsubscribedComponent}/>
						<Route exact path="/ardrashop.com/unsubscribe" component={UnsubscribeComponent}/>
						<Route path="/ardrashop.com/productdetailpage/:productid" component={ProductDetailPage} />
						
						<Redirect to="/ardrashop.com"/>
					</Switch>
					<FooterComponent/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
