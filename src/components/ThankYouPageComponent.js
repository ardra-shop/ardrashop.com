import React, {Component} from 'react';
import {Row, Container} from 'reactstrap';

class ThankYouPageComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container>
                <Row>
                    <h3> Thank you for subscribing </h3>
                </Row>
                <Row className="mb-1">
                    <img title="happy" className="image" src= {process.env.PUBLIC_URL + "/assets/images/smiley.jpeg"}> 
                    </img>
                </Row>
            </Container>
 
        )
    }

}

export default ThankYouPageComponent;