import { faCarSide, faCloudSun, faMapMarkerAlt, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Sponsors = () => {
    return (
        <div className="w-100 my-5 py-5 bg-danger" >
            <Container className="py-5">
                <Row>
                    <Col className="d-flex text-light justify-content-center">
                        <div className="fs-1 me-3">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <h2>1500</h2>
                            <p>Top Local Guides waiting for you</p>
                        </div>
                    </Col>
                    <Col className="d-flex text-light justify-content-center">
                        <div className="fs-1 me-3">
                            <FontAwesomeIcon icon={faCloudSun} />
                        </div>
                        <div>
                            <h2>78921</h2>
                            <p>Winter Destinations</p>
                        </div>
                    </Col>
                    <Col className="d-flex text-light justify-content-center">
                        <div className="fs-1 me-3">
                            <FontAwesomeIcon icon={faCarSide} />
                        </div>
                        <div>
                            <h2>878</h2>
                            <p>New Tours Every Year</p>
                        </div>
                    </Col>
                    <Col className="d-flex text-light justify-content-center">
                        <div className="fs-1 me-3">
                            <FontAwesomeIcon icon={faSmile} />
                        </div>
                        <div>
                            <h2>8764132</h2>
                            <p>Happy Travelers</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sponsors;