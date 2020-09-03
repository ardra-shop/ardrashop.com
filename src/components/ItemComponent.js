import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, UncontrolledCarousel } from 'reactstrap';

class ItemComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : this.props.items
        }
    }

    renderCard(item){
        return(
            <React.Fragment>
                <Card className='mt-3'>
                    <CardBody>
                        <CardTitle>
                            <h5>
                                {item.name} <small className='text-success'> {item.cost} </small>
                            </h5>
                        </CardTitle>
                        <Row className='row'>
                            <Col className='col col-md-4'>
                                
                            </Col>
                            <Col className='col col-md-2'>
                                
                            </Col>
                            <Col className='col col-md-4'>
                                
                            </Col>
                            <Col className='col col-md-2'>
                                
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
           </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    {this.state.items.map((items) => this.renderCard(items))}
                </Container>
            </React.Fragment>
        );
    }
}

export default ItemComponent;