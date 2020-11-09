import React, {Component} from 'react';
import { Row, Container, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class NoSearchResultComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row className="align-items-center fullpage">
                        <Col xl="12">
                            <Row className="justify-content-center text-center"> 
                                <h1> No search results found. </h1>
                            </Row>
                            <Row className="justify-content-center text-center">
                                <h6> Try checking your spelling or use more general terms. </h6>
                            </Row>
                            <br/>
                            <Row className="justify-content-center text-center">
                                <h2> Need help? </h2>
                            </Row>
                            <Row className="justify-content-center text-center">
                                <h6> <Link to = "/"> <Button title="home"> Go back to home </Button> </Link> </h6>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default NoSearchResultComponent;