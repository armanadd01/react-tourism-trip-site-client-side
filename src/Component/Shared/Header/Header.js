import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logoImg from '../../../Images/logo.png';
const Header = () => {
    const { user, logOut } = useAuth();
    console.log("🚀 ~ file: Header.js ~ line 7 ~ Header ~ useAuth", useAuth())
    
    return (
        <>
        {/* Navber */}
            <div className="w-100 ">
                <div className="container-fluid ">
                    {/* Site logo */}
                    
                        <div className="navbar navbar-expand-md navbar-light w-100 m-0 p-0">
                            <div className="col-md-4 col-sm-8 m-0 p-0 ">
                                <div className="navbar-brand m-0 p-0 site-logo me-sm-5" >
                                <NavLink activeClassName=" text-light" className="nav-link fs-6" to="/home">
                                    <img className="w-50" src={logoImg} alt="" />
                                </NavLink>
                                </div>
                                
                            </div>
                            <div className="col-sm-4 d-md-none">
                                <button className="navbar-toggler ms-5 mt-4 align-sm-middle text-sm-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-md-8 col-sm-12 ">
                                {/* Navigation bar */}
                                
                            <nav className="collapse navbar-collapse p-md-0 p-3 text-center" id="navbarNav">
                                    <div className="col-md-8">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="border-bottom border-danger border-5 rounded-bottom text-danger" className="nav-link fs-6 border-5 border-transparent fw-bold" to="/home">Home</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="border-bottom border-danger border-5 rounded-bottom text-danger" className="nav-link fs-6 border-5 border-transparent fw-bold" to="/plans">Plans</NavLink>
                                            </li>
                                             <li className="nav-item p-2">
                                                <NavLink activeClassName="border-bottom border-danger border-5 rounded-bottom text-danger" className="nav-link fs-6 border-5 border-transparent fw-bold" to="/allorders">All Orders</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="border-bottom border-danger border-5 rounded-bottom text-danger" className="nav-link fs-6 border-5 border-transparent fw-bold" to="/myorders">My orders</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="border-bottom border-danger border-5 rounded-bottom text-danger" className="nav-link fs-6 border-5 border-transparent fw-bold" to="/admindashboard">Admin Dashboard</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="navbar-nav ">
                                            
                                            <li className="nav-item p-2">
                                            { user?.displayName?
                                                    <NavLink to="/login">
                                                        <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                                    </NavLink>
                                                     : 
                                                    <NavLink to="/login">
                                                    <button className="btn btn-warning me-2" >Log In</button>
                                                    </NavLink>
                                                 } 
                                                
                                            </li>
                                             { user?.displayName? 
                                                <li className="nav-item p-2">
                                                     <a href="#login">{user?.displayName}</a> 
                                                </li>
                                                :
                                                ''
                                             } 
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        
                    </div>
            </div>
    </>
    );
};

export default Header;