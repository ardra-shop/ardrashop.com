import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button } from 'reactstrap';
import { Link} from 'react-router-dom';

class UnsubscribedPageComponent extends Component{

    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row className="align-items-center fullpage">
                        <Col xl="12">
                            <Row className="justify-content-center text-center">
                                <h2>
                                    You have been unsubcribed.
                                </h2>
                            </Row>
                            <Row className="justify-content-center mb-5 text-center">
                                <small>
                                    You will be removed from the subscription in less than 24 hours.
                                </small>
                            </Row>
                            <Row className="justify-content-center mt-5 text-center">
                                <h3>
                                    Unsubscribed accidentally? <Link to="ardrashop.com/subscribe" className="text-dark">Subscribe</Link> again.
                                </h3>
                            </Row>
                            <Form row className="form-inline justify-content-center">
                                <Input className="form-control my-2" type="email" placeholder="Enter your email" aria-label="email"/>
                                &nbsp;
                                <Link to='/ardrashop.com/subscribed'>
                                    <Button className="btn" color="primary" type="submit">
                                        Subscribe
                                    </Button>
                                </Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default UnsubscribedPageComponent;