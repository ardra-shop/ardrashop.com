import React, { Component } from 'react';
import { Items } from '../shared/Items';
import PaginationComponent from './PaginationComponent';
import SearchItemComponent from './SearchItemComponent'

class SearchResultComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <SearchItemComponent items={Items}/>
                <PaginationComponent />
            </React.Fragment>
        );        
    }
}

export default SearchResultComponent;