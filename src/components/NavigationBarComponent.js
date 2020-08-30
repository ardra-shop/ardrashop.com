import React, {Component} from 'react';
import '../App.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Input, Form, FormGroup } from 'reactstrap';
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
                        <NavbarBrand className="" href="/">
                            <div className='brandname'>
                                ardra
                            </div>
                        </NavbarBrand>
                        <Form className="form-inline my-2 my-lg-0">
                            <Input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <Button className="btn btn-sm btn-primary my-2 my-sm-0 d-none d-md-block" type="submit">
                                Search
                            </Button>
                        </Form>
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