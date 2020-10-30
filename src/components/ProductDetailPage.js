import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Items } from '../shared/Items';

class ProductDetailPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            productId : this.props.match.params.productid,
            items : Items
        };
    }

    render(){

        for (var i =0;i < 20; i++){
            for (const value in Items[i]){
                console.log(value[0]);
            }
        }

        return(
            <React.Fragment>
                <Container>
                    This is Product detail page.
                    <br/>
                    { this.state.productId }
                </Container>
            </React.Fragment>
        );
    }
}

export default ProductDetailPage;