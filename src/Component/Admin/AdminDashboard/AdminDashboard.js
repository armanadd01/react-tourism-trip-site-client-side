import React, { useState } from 'react';
import AddUser from '../../AddUser/AddUser';
import AddPlans from '../../AddPlans/AddPlans';
import Plans from '../../Home/Plans/Plans';
import DeleteUsers from '../DeleteUsers/DeleteUsers';
import Orders from '../../Orders/Orders';
import AllOrders from '../AllOrders/AllOrders';
import MyOrders from '../../MyOrders/MyOrders';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import Orders from '../../Orders/Orders';
// import AllOrders from '../AllOrders/AllOrders';

const AdminDashboard = () => {
    const [control, setControl] = useState("allorders");
    return (
        <>
            <div className="container">
            <div className="dashboard">
                <div className="">
                <div className="row ">
                    <div className="col-md-3 ">
                    <div className=" p-1">
                        <h6>Dashboard</h6>
                        <div className="all-menu mt-5">
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
                                Manage User
                            </ListGroup.Item>
                        </ListGroup>
                        
                     
                        </div>
                    </div>
                    </div>
                    <div className="col-md-9 text-center  text-center">
                     {control === "allorders" && <AllOrders></AllOrders>} 
                     {control === "myorder" && <MyOrders></MyOrders>} 
                    {control === "addusers" && <AddUser></AddUser>}
                    {control === "manageuser" && <DeleteUsers></DeleteUsers>}
                    {control === "addplans" && <AddPlans></AddPlans>}

                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default AdminDashboard;