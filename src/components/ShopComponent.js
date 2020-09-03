import React, { Component } from 'react';
import { Items } from '../shared/Items';
import ItemComponent from './ItemComponent'

class ShopComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <ItemComponent items={Items}/>
            </React.Fragment>
        );        
    }
}

export default ShopComponent;