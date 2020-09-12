import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Container, Row } from 'reactstrap';

class PaginationComponent extends Component{
    render(){
        return(
            <Container>
                <Row className="justify-content-center">
                    <Pagination aria-label="Page navigation">
                        <PaginationItem>
                            <PaginationLink first className="bg-secondary text-white"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous className="bg-secondary text-white"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="bg-secondary text-white">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="bg-secondary text-white">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next className="bg-secondary text-white"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last className="bg-secondary text-white"/>
                        </PaginationItem>
                    </Pagination>
                </Row>
            </Container>
        );
    }
}

export default PaginationComponent;