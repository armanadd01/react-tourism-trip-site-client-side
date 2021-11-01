import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleLogIn, setUser, signInWithPopup, error, setError, isLoading} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const location = useLocation();
    const  redirect_url  = location?.state || { from: { pathname: "/" } };


    const onSubmit = data => {
        
        axios.post('https://peaceful-bayou-60710.herokuapp.com/adduser',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Added Successfully');
                reset();
            }
            
        })
    };

    let login = () => {
        googleLogIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
                history.push(redirect_url.from?.pathname)
            })
            .catch((error)=>{
                setError(error.message)
            })
        };

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
                                <p>Please Register Before Log In</p>
                                <div className="mt-5">
                                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control m-3" placeholder="Enter Plans name" type="text"  {...register("name", { required: true, maxLength: 20 })} />

                                    <input className="form-control  m-3" placeholder="Enter Email" type="text"  {...register("email", { required: true })} />

                                    <input  className="form-control m-3" placeholder="Enter Date" type="datetime-local" defaultValue={new Date()}  {...register("date")} />

                                    <input className="form-control m-3" placeholder="Enter Your profile Image Url" type="text"  {...register("img")} />

                                    <input className="btn btn-outline-light" type="submit" />
                                </form>
                                    <Link onClick={login} className="btn btn-outline-light" >
                                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> 
                                    Google Log In 
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