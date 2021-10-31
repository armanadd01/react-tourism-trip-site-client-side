import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Plan from '../Plan/Plan';

const Plans = () => {
    const [plans, setPlan] = useState([])

    useEffect(()=>{
        fetch('https://peaceful-bayou-60710.herokuapp.com/plans')
        .then(res => res.json())
        .then(data => setPlan(data))
    },[])
    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col
                        md={12} 
                        className="text-center">
                        <h2 
                        className="w-50 py-3 m-auto custom-border-bottom">
                            Explore Destinations
                        </h2>
                        <p className="fw-bold">We offer you our low-budget travel plans and guides from around the world, full of versatile itinerary ideas, priceless travel tips, and recommendations for places to go.</p>
                    </Col>
                </Row>
                <Row>
                    {
                            // map  data
                            plans.map(plan => <Plan
                                key={plan._id}
                                plan={plan}
                            >

                            </Plan>)
                        }
                </Row>
                
            </Container>
        </>
    );
};

export default Plans;