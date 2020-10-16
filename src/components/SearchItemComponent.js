import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Container, Row, Col, Card, CardBody, CardTitle, UncontrolledCarousel, Button, ButtonGroup } from 'reactstrap';

class SearchItemComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : this.props.items
        }
    }

    renderCard(item){
        return(
            <li key={item.id}>
                <Card className='mt-3'>
                    <CardBody>
                        <CardTitle>
                            <h5>
                                {item.name} <small className='text-success text-sm-right'> {item.cost} </small>
                            </h5>
                            <hr></hr>
                        </CardTitle>
                        <Row>
                            <Col xl="3" lg="4">
                                <UncontrolledCarousel items={item.photo} />
                            </Col>
                            <Col xl="1" lg="2" className="d-none d-lg-block">
                                <Row className="mb-3 mt-lg-3 mt-xl-1">
                                    <Button size="sm" color="warning" block>
                                        {item.sold} Sold
                                    </Button>
                                </Row>
                                <Row>
                                    <Button size="sm" href="#" color="danger" className="mb-3" block>
                                        <StarRatings rating={item.review}
                                            starDimension="14px"
                                            starSpacing="0px"
                                            starRatedColor="yellow"/>
                                    </Button>
                                </Row>
                                <Row>
                                    <Button size="sm" href="#" color="success" className="mb-3" block>
                                        Questions
                                    </Button>
                                </Row>
                            </Col>
                            <Col md="12" className="d-block d-lg-none my-3">
                                <ButtonGroup className="d-flex">
                                    <Button color="warning">
                                        {item.sold} Sold
                                    </Button>
                                    <Button href="#" color="danger">
                                        <StarRatings rating={item.review}
                                            starDimension="14px"
                                            starSpacing="0px"
                                            starRatedColor="yellow"/>
                                    </Button>
                                    <Button href="#" color="success">
                                        Questions
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col xl="6" lg="6">
                                <h6>
                                    Description
                                </h6>
                                <p>
                                    {item.description}
                                </p>
                            </Col>
                            <Col xl="2" lg="8" className="offset-lg-2 offset-xl-0">
                                <div className="d-none d-xl-block">
                                    <Button size="sm" href="#" color="secondary" className="mb-3" block>
                                        Add to wishlist
                                    </Button>
                                    <Button size="sm" href="#" color="primary" className="mb-3" block>
                                        Buy now
                                    </Button>
                                    <Button size="sm" href="#" color="secondary" className="mb-3" block>
                                        Add to cart
                                    </Button>
                                </div>
                                <div className="d-xl-none">
                                    <ButtonGroup className="d-flex" block>
                                        <Button href="#" color="secondary">
                                            Add to wishlist
                                        </Button>
                                        <Button href="#" color="primary">
                                            Buy now
                                        </Button>
                                        <Button href="#" color="secondary">
                                            Add to cart
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
           </li>
        )
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <ul className="list-unstyled">
                        {this.state.items.map((items) => this.renderCard(items))}
                    </ul>
                </Container>
            </React.Fragment>
        );
    }
}

export default SearchItemComponent;