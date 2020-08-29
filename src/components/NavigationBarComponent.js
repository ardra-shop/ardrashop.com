import React, {Component} from 'react';
import '../App.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class NavigationBarComponent extends Component{

    constructor(props){
		super(props);
		this.state={
			isNavOpen:false
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

    toggleNav(){
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

    render(){
        return(
            <React.Fragment>
                <Navbar className="bg-dark" dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        &nbsp;
                        <NavbarBrand className="m-auto" href="/">
                            <div className='brandname'>
                                ardra
                            </div>
                        </NavbarBrand>
                        &nbsp;
                        <Nav>
                            <form className='form-inline'>
                                <div className="form-group">
                                    <input className="form-control form-control-sm" placeholder="Search"/>
                                    <button type="submit" className="ml-1 btn btn-sm btn-primary d-none d-md-block">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </Nav>
                        &nbsp;
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            	<NavItem>
                                    <NavLink className="nav-link" to='/login'>
                                        Login
                                    </NavLink>
                            	</NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/yourordes'>
                                        Your Orders
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/cart'>
                                        Cart
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavigationBarComponent;