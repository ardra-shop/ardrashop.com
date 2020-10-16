import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class BannerComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            banner : this.props.banner
        }
    }

    render(){
        return(
            <React.Fragment>
                <Row className="justify-content-center">
                    <Col>
                        <div class="embed-responsive embed-responsive-1by1">
                            <video title="Banner" autoPlay loop muted class="embed-responsive-item" src= {process.env.PUBLIC_URL + this.state.banner}>
                            </video>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default BannerComponent;