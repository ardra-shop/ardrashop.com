import React, {Component} from 'react';
import '../App.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Input, Form, FormGroup, Container, Row, Col, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';

class NavigationBarComponent extends Component{

    constructor(props){
		super(props);
		this.state={
            isNavOpen:false,
            isLoginModalOpen: false
		};
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
	}

    toggleNav(){
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
    }
    
    toggleLoginModal(){
		this.setState({
			isLoginModalOpen: !this.state.isLoginModalOpen
		});
	}

    render(){
        return(
            <React.Fragment>
                <Modal className="modal-dialog-centered" isOpen={this.state.isLoginModalOpen} toggle = {this.toggleLoginModal}>
                	<ModalHeader toggle = {this.toggleLoginModal}> Login </ModalHeader>
                	<ModalBody>
                		<Form>
                			<FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"/>
                                <small>
                                    <Link to='/forgotpassword'>
                                        Forgot password?
                                    </Link>
                                </small>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col className='col-6'>
                                        <Button className="mt-3 btn-block" type="submit" value="submit" color="success">
                                            Login
                                        </Button>
                                    </Col>
                                    <Col className='col-6'>
                                        <Link to="/ardrashop.com/signup">
                                            <Button onClick = {this.toggleLoginModal} className="mt-3 btn-block" type="button" color="primary">
                                                New? Sign Up
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                                
                            </FormGroup>
                		</Form>
                	</ModalBody>
                </Modal>
                <Navbar className="bg-dark" dark expand="md">
                    <Container className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/ardrashop.com">
                            <div className='brandname'>
                                ardra
                            </div>
                        </NavbarBrand>
                        <Form className="form-inline my-2 my-lg-0">
                            <Input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <Link to='/ardrashop.com/searchresult'>
                                <Button className="btn btn-sm btn-primary my-2 my-sm-0 d-none d-md-block" type="submit">
                                    Search
                                </Button>
                            </Link>
                        </Form>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
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
                                <Form className="form-inline my-2 my-lg-0">
                                    <Button className="btn btn-sm btn-primary my-2 my-sm-0" onClick={this.toggleLoginModal}>
                                        Login
                                    </Button>
                            	</Form>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavigationBarComponent;