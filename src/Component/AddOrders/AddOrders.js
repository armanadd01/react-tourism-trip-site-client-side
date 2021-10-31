import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import AddedOrders from './AddedOrders';

const AddOrders = () => {
    const { user } = useAuth();
    const {plansId} = useParams();
    const [plans, setPlan] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/addorder/${plansId}`)
        .then(res => res.json())
        .then(data => setPlan(data))
    },[]);


    
    return (
        <>
        <Container fluid className=" my-5 ">
        
          <Row className=" align-items-center " style={{ height: "100vh" }}>
            <Col md={6}>
            <Card style={{ width: '90%' }}>
            <Card.Img variant="top" src={plans.img} style={{ height: "20rem" }} />
                <Card.Body>
                    <Card.Title>Country Name: <span className="text-danger">{plans.name}</span> </Card.Title>
                    <Card.Text>
                    {plans.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </Col>
            <Col md={5} className="bg-danger rounded shadow p-3 bg-danger">
                <AddedOrders 
                    key= {plans._id}
                    order={plans}
                ></AddedOrders>
              </Col>
          </Row>
      </Container>
    </>
    );
};

export default AddOrders;