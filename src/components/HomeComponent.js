import React, { Component } from 'react';
import BannerComponent from './BannerComponent';
import HomeItemComponent from './HomeItemComponent';
import { Items } from '../shared/Items';
import { Container } from 'reactstrap';

class HomeComponent extends Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <BannerComponent banner="/assets/videos/HandmadeBanner.mp4"/>
                    <br/>
                    <BannerComponent banner="/assets/videos/SaleBanner.mp4"/>
                    <br/>
                    <HomeItemComponent items={Items}/>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomeComponent;