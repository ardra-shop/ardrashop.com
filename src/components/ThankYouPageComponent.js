import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class ThankYouPageComponent extends Component{
    render(){
        return(
            <Container>
                <Row className="align-items-center fullpage">
                    <Col xl="12">
                        <Row className="justify-content-center text-center">
                            <h3> Thank you for shopping with us.</h3>
                        </Row>
                        <Row className="justify-content-center text-center">
                            <img title="thank you" className="image" alt="thank you" src= {process.env.PUBLIC_URL + "/assets/images/puppy.jpg"}> 
                            </img>
                        </Row>
                        <br/>
                        <Row className="justify-content-center text-center">
                            <h5> Your item will soon be delivered at your doorstep.</h5>
                        </Row>
                        <br/>
                        <Row className="justify-content-center text-center">
                            <h4> Don't stop! Visit &nbsp;
                                <Link to="/"> 
                                    <Button  title="home" color="primary" className="btn"> Homepage </Button> 
                                </Link>
                            &nbsp; for more such products </h4>

                        </Row>
                    </Col>
                </Row>
            </Container>
 
        )
    }

}

export default ThankYouPageComponent;