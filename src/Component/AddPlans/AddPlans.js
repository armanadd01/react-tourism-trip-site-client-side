import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddPlans = () => {
    const { register, handleSubmit, reset } = useForm();
    //handle plans from
    const onSubmit = data => {
        console.log(data)
        axios.post('https://peaceful-bayou-60710.herokuapp.com/plans',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Trip Plan Added Successfully');
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
                                <h2 className="fs-1 ">Welcome to Add Plans</h2>
                                <p>Its only For loged in users </p>
                                <p>Please Fill the from with all info</p>
                                <div className="mt-5">
                                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control m-3" placeholder="Enter Plans name" type="text"  {...register("name", { required: true, maxLength: 20 })} />
                                    <textarea className="form-control m-3" placeholder="Enter Plans Short Description" {...register("short_des", { required: true, maxLength: 100 })} />
                                    <textarea className="form-control m-3" placeholder="Enter Plans Description" {...register("description")} />
                                    <input className="form-control m-3" placeholder="Enter Plans Price"  type="number" {...register("Price")} />
                                    <input className="form-control m-3" placeholder="Enter Plans Image Url" type="text"  {...register("img")} />
                                    <input className="btn btn-outline-light" type="submit" />
                                </form>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default AddPlans;