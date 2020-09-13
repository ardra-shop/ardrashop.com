import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class SignUpFormComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row className="justify-content-center">
                        <h1 className="brandfont mt-3 mb-0">
                            Sign Up to ardra
                        </h1>
                    </Row>
                    <hr/>
                    <Form>
                        <FormGroup row>
                            <Label md="2" sm="3">
                                Full Name
                            </Label>
                            <Col md="6" sm="5">
                                <Input placeholder="Enter your full name here" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md="2" sm="3">
                                Mobile No.
                            </Label>
                            <Col md="6" sm="5">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                        +91
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter your mobile no." />
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default SignUpFormComponent;