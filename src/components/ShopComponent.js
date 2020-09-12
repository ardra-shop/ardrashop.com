import React, { Component } from 'react';
import { Items } from '../shared/Items';
import PaginationComponent from './PaginationComponent';
import ItemComponent from './ItemComponent'

class ShopComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <ItemComponent items={Items}/>
                <PaginationComponent />
            </React.Fragment>
        );        
    }
}

export default ShopComponent;