import { faCarSide, faCloudSun, faMapMarkerAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Sponsors = () => {
    return (
        <div className="w-100 my-5 py-5 bg-danger" >
            <Container className="py-5">
                <Row>
                    <Col md={3} xs={6} className=" text-light text-sm-center justify-content-center">
                        <Row className="text-center">
                            <Col md={6} sm={12} className="fs-1 me-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </Col>
                            <Col md={6} sm={12}>
                                <h2>1500</h2>
                                <p>Top Local Guides waiting for you</p>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col md={3} xs={6} className=" text-light text-sm-center justify-content-center">
                        <Row className="text-center">
                            <Col md={6} sm={12} className="fs-1 me-3">
                                <FontAwesomeIcon icon={faCloudSun} />
                            </Col>
                            <Col md={6} sm={12}>
                                <h2>78921</h2>
                                <p>Winter Destinations</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} xs={6} className=" text-light text-sm-center justify-content-center">
                        <Row className="text-center ">
                            <Col sm={6} xs={12} className="fs-1 me-3">
                                <FontAwesomeIcon icon={faCarSide} />
                            </Col>
                            <Col md={6} sm={12}>
                                <h2>878</h2>
                                <p>New Tours Every Year</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} xs={6} className="text-light text-sm-center justify-content-center">
                        <Row className="text-center">
                            <Col md={6} sm={12} className="fs-1 me-3">
                                <FontAwesomeIcon icon={faSmile} />
                            </Col>
                            <Col md={6} sm={12}>
                                <h2>8764132</h2>
                                <p>Happy Travelers</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sponsors;