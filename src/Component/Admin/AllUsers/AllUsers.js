import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://peaceful-bayou-60710.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col
                        md={12} 
                        className="text-center">
                        <h2 
                        className="w-50 py-3 m-auto custom-border-bottom">
                            Let's Meet With Our Valuable Clients
                        </h2>
                        <p className="fw-bold">We offer you our low-budget travel plans and guides from around the world, full of versatile itinerary ideas, priceless travel tips, and recommendations for places to go.</p>
                    </Col>
                </Row>
                <Row>
                    {users?.map((user) => (
                    <Col md={4} className="my-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.img} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                            </Card.Body>
                        </Card>    
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default AllUsers;