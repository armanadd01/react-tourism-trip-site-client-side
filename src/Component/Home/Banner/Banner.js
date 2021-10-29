import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-bg">
            <Container className="py-5">
                <Row>
                    <Col 
                    md={6}>
                    
                    </Col>
                    <Col 
                    md={6} 
                    className="py-5">
                        <h1 
                        className="text-justify my-4">
                            Make Trip With <span className="text-danger">tripster</span>
                            </h1>
                        <h3 
                        className="text-justify my-4">
                            The <span className="text-danger">tripster</span> Is One of The Largest Travel Agency company.
                        </h3>
                        <h5 
                        className="fw-bold my-4">
                            We are Your trusted Travel Partner
                        </h5>
                        <p 
                        className="text-justify fw-bold my-4">
                            A travel agency is a private retailer or public service that provides travel and tourism-related services to the people. And suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours.
                        </p>
                        <button className="btn btn-outline-danger my-4">Make A Trip</button>
                    </Col>

                </Row>
            </Container>
            
        </div>
    );
};

export default Banner;