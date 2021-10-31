import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleLogIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    console.log("🚀 ~ file: Login.js ~ line 12 ~ Login ~ from", from)
    
    let login = () => {
        googleLogIn(() => {
        const redirect =  async () => history.push(from);
         
         console.log(history.replace(from))
        });
        //  console.log("🚀 ~ file: Login.js ~ line 19 ~ googleLogIn ~ googleLogIn", googleLogIn)
        
        
    };
    // console.log("🚀 ~ file: Login.js ~ line 19 ~ login ~ login", login)
    return (
      // Login page
        <div className="login-bg p-5">
          <div className="container my-5 ">
              <div className="row align-items-center " style={{ height: "100vh" }}>
                <div className="col-md-12 bg-danger rounded shadow p-5 bg-danger">
                    <div className="text-wrap p-4 p-lg-5 text-center bg-danger">
                            <div className="text-light w-100 align-middle">
                                <h2 className="fs-1 ">Welcome to login</h2>
                                <p>Don't have an account?</p>
                                <p>Please click the Input Field And Register</p>
                                <div className="mt-5">
                                
                                    <Link onClick={login} to={from.pathname} className="btn btn-outline-light" >
                                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                   
                                    Google Sign in 
                                </Link>
                                  
                                
                            
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        
    );
};

export default Login;