import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

class SearchItemComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : this.props.items
        }
    }

    renderCard(item){
        return(
            <Col key={item.id} className="mb-4" lg="3" md="4" xs="6">
                <Card>
                    <Link to={"ardrashop.com/productdetail/" + item.id} className="text-dark">
                        <CardBody>
                            <CardImg className="card-img-top" src={item.photo[0].src} />
                            <CardTitle className="mt-3 mb-0">
                                <h5 className="mb-0">
                                    {item.name}
                                </h5>
                            </CardTitle>
                        </CardBody>
                    </Link>
                </Card>
            </Col>
        );
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        {this.state.items.map((items) => this.renderCard(items))}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default SearchItemComponent;