import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class SignUpFormComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="10" md="8" lg="6" xl="4">
                            <h1 className="brandfont mt-3 mb-0 text-center">
                                Sign Up to ardra
                            </h1>
                            <hr/>
                            <Form>
                                <FormGroup row>
                                    <Label row>
                                        Full Name
                                    </Label>
                                        <Input placeholder="Enter your full name here" />
                                </FormGroup>
                                <FormGroup row>
                                    <Label>
                                        Mobile No.
                                    </Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            +91
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="tel" placeholder="Enter your mobile no." />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup row>
                                    <Label>
                                        Email
                                    </Label>
                                    <Input type="email" placeholder="Enter your Email ID here" />
                                </FormGroup>
                                <FormGroup row>
                                    <Label>
                                        Password
                                    </Label>
                                    <Input type="password" placeholder="Enter your Password" className="mb-3"/>
                                    <Input type="password" placeholder="Retype your Password" />
                                </FormGroup>
                                <Row>
                                    <Col>
                                        <Button color="success" type="submit" block>
                                            Register
                                        </Button>
                                        <br/>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default SignUpFormComponent;

