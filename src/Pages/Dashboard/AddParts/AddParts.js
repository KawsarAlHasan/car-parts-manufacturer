import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddParts = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://stark-brushlands-57907.herokuapp.com/addParts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.reload(false);
                toast('Car Parts Added Successfully!');
            })
    };
    
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className='text-center container w-50 my-3'>
                <h1>Add <span className='text-danger'>Car Parts</span></h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2' placeholder='Parts Name' {...register("name", { required: true})} />
                    <input className='mb-2' placeholder='Image url' {...register("img", { required: true })} />
                    <input className='mb-2' defaultValue={user.email} {...register("email", { required: true, readonly: true})} />
                    <input className='mb-2' placeholder='Available Quantity' type="number" {...register("quantity", { required: true })} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <input className='mb-2' placeholder='Minimum Order Quantity' type="number" {...register("orderQuantity", { required: true })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-primary' value="Add Parts" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddParts;