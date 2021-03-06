import React, {Component} from 'react';
import {Row, Container, Col, Button, Input, Form} from 'reactstrap';
import {Link} from 'react-router-dom';

class FooterComponent extends Component{
    render(){
        return(
            <div className ="p-3 mb-0 bg-dark text-white">
                <Container>
                    <Row>

                        {/*1st column*/}
                        <Col className="md-col-3">
                            <h3 className="text-warning">About us</h3> 
                            <p className="text-white"> We provide handicraft stuff ........ etc etc </p>
                            <br/>
                            <img alt="logo" class="embed-responsive-item image text-left" src= {process.env.PUBLIC_URL + "/assets/icons/logo.jpeg"}> 
                            </img>
                            {/* <h2 className="brandfont"> ardra </h2> */}
                        </Col>

                        {/*2nd column */}
                        <Col className="md-col-3">
                            <h4 className="text-warning">Other Links</h4> 
                            <ul className="list-unstyled text-white ">
                                <Link to = '/ardrashop.com' className="text-white"> <li> Homepage </li> </Link>
                                <Link to = '/ardrashop.com/signup' className="text-white"> <li> Register </li> </Link>
                                <Link to = "#" className="text-white"> <li> Terms &amp; conditions </li> </Link>
                                <Link to = "/ardrashop.com/nosearchresult" className="text-white"> <li> No search </li></Link>
                            </ul>
                        </Col>

                        {/*3rd Column*/}
                        <Col className="md-col-3">
                            <h4 className="text-warning">  Connect </h4>
                            <ul className="list-unstyled text-white ">
                                <li> 
                                    <a href="https://instagram.com/ardrashopdotcom?igshid=yq9v34n55f5d" className ="instagram text-white">  Instagram </a> 
                                </li>
                                <li>
                                    <a href="#" className="text-white"> Youtube </a>
                                </li> 
                                <li>
                                    <a href="#" className="text-white">Twitter </a> 
                                </li>
                                <li>
                                    <a href="#" className="text-white"> Facebook </a>
                                </li>

                            </ul>
                        </Col>

                        {/*4th Column */}
                        <Col className="md-col-3">
                            <h4 className="text-warning">  Contact us</h4>
                            <ul className="list-unstyled text-white">
                            <li> 
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                </svg>
                                &nbsp;
                                <a href="tel:1234567890" className="text-white"> Call </a>
                            </li> 
                            <li> 
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                                &nbsp;
                                <a href="mailto:ardrasupport@gmail.com" className="text-white"> Mail </a> 
                            </li> 
                            <li>
                                <a href="#" className ="text-white">  Customer service </a> 
                            </li>
                            <li>
                                <a href="#" className="text-white"> Feedback </a>
                            </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h6 className="text-white"> Subscribe to get notified regularly </h6>
                    </Row>
                        <Form row className="form-inline justify-content-center">
                            <Input className="form-control" type="email" placeholder="Enter your email" aria-label="email"/>
                            &nbsp;
                            <Link to='/subscribed'>
                                <Button className="btn" color="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Link>
                        </Form>
                </Container>
            </div>
        )
    }
}

export default FooterComponent;