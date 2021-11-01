import React, { useState } from 'react';
import AddUser from '../../AddUser/AddUser';
import AddPlans from '../../AddPlans/AddPlans';
import Plans from '../../Home/Plans/Plans';
import DeleteUsers from '../DeleteUsers/DeleteUsers';
import Orders from '../../Orders/Orders';
import AllOrders from '../AllOrders/AllOrders';
import MyOrders from '../../MyOrders/MyOrders';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
// import Orders from '../../Orders/Orders';
// import AllOrders from '../AllOrders/AllOrders';

const AdminDashboard = () => {
    const [control, setControl] = useState("allorders");
    return (
        <>
            <Container fluid className="bg-dark">
                <Row>
                    <Col className="text-center text-light py-2">
                        <h1> Admin DahsBoard</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="row ">
                    <Col className="col-md-3 ">
                        <div className=" p-1">
                            <div className="mt-5">
                                {/* list item */}
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" onClick={() => setControl("allorders")} >
                                    All Orders
                                </ListGroup.Item>
                                <ListGroup.Item as="li" onClick={() => setControl("myorder")}>
                                    My Orders
                                </ListGroup.Item>
                                <ListGroup.Item as="li"onClick={() => setControl("addusers")} >
                                    Add Users
                                </ListGroup.Item>
                                <ListGroup.Item as="li" onClick={() => setControl("manageuser")}>
                                    Manage User
                                </ListGroup.Item>
                                <ListGroup.Item as="li" onClick={() => setControl("addplans")} >
                                    Add Plans
                                </ListGroup.Item>
                            </ListGroup>
                            
                        
                            </div>
                        </div>
                    </Col>
                    {/* show the data */}
                    <div className="col-md-9 text-center  text-center">
                    {control === "allorders" && <AllOrders></AllOrders>} 
                    {control === "myorder" && <MyOrders></MyOrders>} 
                    {control === "addusers" && <AddUser></AddUser>}
                    {control === "manageuser" && <DeleteUsers></DeleteUsers>}
                    {control === "addplans" && <AddPlans></AddPlans>}

                    </div>
                </Row>
            </Container>
        </>
    );
};

export default AdminDashboard;