import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Plan = (props) => {
    const {_id, Price, name, img, description, short_des } = props.plan
    return (
        <>
            
            <Col md={4} className="my-4">
                <Card style={{ width: '100%'}}>
                    <Card.Img style={{height: '13rem' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger"> <h2 className="fw-bold">{name}</h2></Card.Title>
                        <Card.Text className="fs-5">
                            <h6 className="text-primary fs-5 fw-bold">price: <span className="text-danger fs-6">$ {Price}</span></h6>
                            <hr />
                        </Card.Text>
                        <Card.Text>
                            {short_des}
                        </Card.Text>
                        <Link to={`/addorder/${_id}`}>
                        <Button variant="outline-danger" size="sm">Add Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                        </Link>
                    </Card.Body>
                </Card>    
            </Col>
            
        </>
    );
};

export default Plan;