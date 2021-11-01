import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logoImg from '../../../Images/logo.png';

const Footer = () => {
    const { user, logOut } = useAuth();
    return (
        <>
    <Container fluid className="text-light text-center bg-info text-md-left mt-5 border-top border-5 border-danger  ">
        <Container>
            <Row className="row">
                <Col md={4} sm={12} className=" mt-md-0 mt-3 pt-5">
                    <img className="w-50" src={logoImg} alt="" />   
                    <h5 className="text-uppercase">Tripster</h5>
                    <p>Largest Traveling Website In the World.</p>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="bg-transparent border-danger"
                        />
                        <Button variant="danger" id="button-addon2">
                        Subscribe Now
                        </Button>
                    </InputGroup>
                </Col>


                <Col md={4} sm={12} className=" mb-md-0 mb-3 pt-3">
                    <h5 className="text-uppercase">Menu</h5>
                    <ul className="navbar-nav ">
                        <li className="nav-item p-1">
                            <NavLink activeClassName="text-danger" className="  nav-link fs-6 border-5 border-transparent fw-bold" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink activeClassName="text-danger" className="  nav-link fs-6 border-5 border-transparent fw-bold" to="/plans">Plans</NavLink>
                        </li>
                            <li className="nav-item p-1">
                            <NavLink activeClassName="text-danger" className="  nav-link fs-6 border-5 border-transparent fw-bold" to="/allorders">All Orders</NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink activeClassName="text-danger" className=" nav-link fs-6 border-5 border-transparent fw-bold" to={`/myorder/${user?.email}`} >
                                My orders
                            </NavLink>
                        </li>
                        { user?.displayName?
                        <li className="nav-item p-1">
                            <NavLink activeClassName="text-danger" className="  nav-link fs-6 border-5 border-transparent fw-bold" to="/admindashboard">Admin Dashboard</NavLink>
                        </li>
                        :
                        ''
                        }
                    </ul>
                </Col>

                <Col md={4} sm={12} className="mb-md-0 mb-3 pt-3 text-start">
                    <h5 className="text-uppercase">Social</h5>
                    <ListGroup className="bg-transparent " horizontal>
                        <ListGroup.Item className="bg-transparent"><FontAwesomeIcon className="text-primary fs-3" icon={faFacebook}></FontAwesomeIcon></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><FontAwesomeIcon className="text-danger fs-3" icon={faInstagram}></FontAwesomeIcon></ListGroup.Item>
                        <ListGroup.Item className="bg-transparent"><FontAwesomeIcon className="text-danger fs-3" icon={faYoutube}></FontAwesomeIcon></ListGroup.Item>
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        
    </Container>

    <div className=" text-center py-3 bg-danger">
        <h3>
        © 2020 Copyright:
        </h3>
        
    </div>

        </>
    );
};

export default Footer;