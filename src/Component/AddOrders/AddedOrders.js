import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddedOrders = (props) => {
    const {_id, Price, name, img, description } = props.order
    const { user } = useAuth();
    console.log("🚀 ~ file: AddedOrders.js ~ line 9 ~ AddedOrders ~ user", user)
    //from handler
    const { register, 
        handleSubmit,
        reset  } = useForm();
    const onSubmit = data => {
        console.log(data)
        data.email = user?.email;
        axios.post('https://peaceful-bayou-60710.herokuapp.com/addorder',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Added Successfully');
                reset();
            }
            
        })
    };
    return (
        <div className="text-wrap p-3 p-lg-3  bg-danger">
        <div className="text-light w-100 align-middle">
            <h2 className="fs-1 ">Welcome to Add orders</h2>
            
            <p>Please Fill the from with all info</p>
            <div className="mt-5 ">
                {/* order from */}
            <form className="pt-2" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control m-3" placeholder="Enter Id" type="hidden"  {...register("id", { required: true})} defaultValue={_id}  />
                <input className="form-control m-3" placeholder="Enter Plans Name" type="text"  {...register("name", { required: true, maxLength: 20 })} defaultValue={name} />
                <input className="form-control m-3" placeholder="Enter User Name" type="text"  {...register("username")} defaultValue={user?.displayName} />
                <input className="form-control  m-3" placeholder="Enter Email" type="text"  {...register("email")} defaultValue={user?.email} />
                <label for="label" className="form-label text-start ps-3">Input Your Travel Date</label>
                <input  className="form-control m-3" id="label" placeholder="Enter Date" type="datetime-local" defaultValue={new Date()}  {...register("date")} />

                <input className="form-control m-3" placeholder="Status" type="hidden" defaultValue="Pending"  {...register("status")} />
                <input value="Confirm" className="btn btn-outline-light" type="submit" />
                
                
            </form>
            
        </div>
    </div>
    </div>
    );
};

export default AddedOrders;