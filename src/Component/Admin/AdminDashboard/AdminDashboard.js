import React, { useState } from 'react';
import AddUser from '../../AddUser/AddUser';
import AddPlans from '../../AddPlans/AddPlans';
import Plans from '../../Home/Plans/Plans';
import DeleteUsers from '../DeleteUsers/DeleteUsers';
// import Orders from '../../Orders/Orders';
// import AllOrders from '../AllOrders/AllOrders';

const AdminDashboard = () => {
    const [control, setControl] = useState("allorders");
    return (
        <div>
            <div className="container">
            <div className="dashboard">
                <div className="admin-box">
                <div className="row admin-container">
                    <div className="col-md-3 ">
                    <div className="admin-area p-1">
                        <h6>Dashboard</h6>
                        <div className="all-menu mt-5">
                        <li
                            onClick={() => setControl("allorders")}
                            className="admin-menu p-2"
                        >
                            All Orders
                        </li>
                        <li
                            onClick={() => setControl("plans")}
                            className="admin-menu p-2"
                        >
                            Plans
                        </li>
                        <li
                            onClick={() => setControl("addorder")}
                            className="admin-menu p-2"
                        >
                            Add Order
                        </li>
                        <li
                            onClick={() => setControl("addusers")}
                            className="admin-menu p-2"
                        >
                            Add User
                        </li>
                        <li
                            onClick={() => setControl("manageuser")}
                            className="admin-menu p-2"
                        >
                            Manage Users
                        </li>
                        <li
                            onClick={() => setControl("addplans")}
                            className="admin-menu p-2"
                        >
                            Add Plans
                        </li>
                        <li
                            onClick={() => setControl("allEvents")}
                            className="admin-menu p-2"
                        >
                            Manage Plans
                        </li>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-9 text-center  text-center">
                    {/* {control === "allorders" && <Orders></Orders>} */}
                    {control === "plans" && <Plans></Plans>}
                    {control === "addusers" && <AddUser></AddUser>}
                    {control === "manageuser" && <DeleteUsers></DeleteUsers>}
                    {/* {control === "delete" && <AddOrders></AddOrders>} */}
                    {control === "addplans" && <AddPlans></AddPlans>}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AdminDashboard;