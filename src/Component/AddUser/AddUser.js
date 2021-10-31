import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AddUser = () => {
    const { user, logOut } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        data.email = user?.email;
        axios.post('http://localhost:5000/adduser',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Added Successfully');
                reset();
            }
            
        })
    };
    return (
        <>
        <div className="container my-5 ">
          <div className="row align-items-center " style={{ height: "100vh" }}>
            <div className="col-md-12 bg-danger rounded shadow p-5 bg-danger">
                <div className="text-wrap p-4 p-lg-5 text-center bg-danger">
                        <div className="text-light w-100 align-middle">
                            <h2 className="fs-1 ">Welcome to Add orders</h2>
                            
                            <p>Please Fill the from with all info</p>
                            <div className="mt-5">
                            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control m-3" placeholder="Enter Plans name" type="text"  {...register("name", { required: true, maxLength: 20 })} />

                                <input className="form-control  m-3" placeholder="Enter Email" type="text"  {...register("email", { required: true })} />

                                <input  className="form-control m-3" placeholder="Enter Date" type="datetime-local" defaultValue={new Date()}  {...register("date")} />

                                <textarea className="form-control m-3" placeholder="Enter Order Description" {...register("description")} />

                                <input className="btn btn-outline-light" type="submit" />
                            </form>
                            { user?.displayName?
                                <NavLink to="/login">
                                    <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </NavLink>
                                : 
                                <NavLink to="/login">
                                <button className="btn btn-warning me-2" >Log In</button>
                                </NavLink>
                            } 
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </>
    );
};

export default AddUser;