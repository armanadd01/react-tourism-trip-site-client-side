import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Plan = (props) => {
    const {_id, Price, name, img, description } = props.plan
    return (
        <>
            
            <Col md={4} className="my-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            price:{Price}
                        </Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/addorder/${_id}`}>
                        <Button variant="outline-danger" size="sm">Go somewhere <FontAwesomeIcon className="ms-5" icon={faArrowAltCircleRight} /></Button>
                        </Link>
                    </Card.Body>
                </Card>    
            </Col>
            
        </>
    );
};

export default Plan;