import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleLogIn} = useAuth;
    
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
                            <button onClick={googleLogIn} className="btn btn-warning" >
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Sign in 
                            </button>
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