import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import AddedOrders from './AddedOrders';

const AddOrders = () => {
    const { user } = useAuth();
    const {plansId} = useParams();
    const [plans, setPlan] = useState([]);
    //get plan 
    useEffect(()=>{
        fetch(`https://peaceful-bayou-60710.herokuapp.com/addorder/${plansId}`)
        .then(res => res.json())
        .then(data => setPlan(data))
    },[]);


    
    return (
        <>
        <Container fluid className=" my-5 ">
        
          <Row className=" align-items-center ">
            <Col md={6} sm={12} className="mb-5">
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={plans.img} style={{ height: "20rem" }} />
                <Card.Body>
                    <Card.Title>Country Name: <span className="text-danger">{plans.name}</span> </Card.Title>
                    <Card.Text className="fs-5">
                        <h6 className="text-primary fs-5 fw-bold">price: <span className="text-danger fs-6">$ {plans.Price}</span></h6>
                        <hr />
                    </Card.Text>
                    <Card.Text>
                        {plans.short_des}
                    </Card.Text>
                    <hr/>
                    <Card.Text>
                    {plans.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={5} sm={12} className="bg-danger rounded shadow p-3 bg-danger mb-5">
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