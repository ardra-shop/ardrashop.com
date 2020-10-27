import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class ProductDetailPage extends Component{

    readParam(){
        let { id } = useParams();
        return(
            <p>
                { id }
            </p>
        )
    }

    render(){
        return(
            <React.Fragment>
                This is Product detail page.
                <br/>
                <useParams/>
            </React.Fragment>
        );
    }
}

export default ProductDetailPage;