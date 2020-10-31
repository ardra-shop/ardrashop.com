import React, {Component} from 'react';
import { Row, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

class NoSearchResultComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row className="mt-2"> 
                        <h5> No search results found </h5>
                    </Row>
                    <Row>
                        <h6> Try checking your spelling or use more general terms </h6>
                    </Row>
                    <br/>
                    <Row>
                        <h2> Need help? </h2>
                    </Row>
                    <Row>
                        <h6> Visit <Link to = "/ardrashop.com"> Homepage </Link> </h6>
                    </Row>
                </Container>
            </React.Fragment>

        )
    }
}
export default NoSearchResultComponent;