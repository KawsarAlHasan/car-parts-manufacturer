import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({ part }) => {
    const { _id, name, img, description, price, quantity, orderQuantity } = part;

    

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stark-brushlands-57907.herokuapp.com/carParts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload(false);
                    toast('Parts Item Delete Successfully!');
                })
        }
    }

    return (
        <div className='shadow-lg rounded text-center pb-3'>
        <h2>{name}</h2>
        <img className='img-fluid' src={img} alt="" />
        <h6>Price: $ {price}</h6>
        <h6>Available Quantity: {quantity}</h6>
        <h6>Minimum Order Quantity: {orderQuantity}</h6>
        
        <button className='btn btn-danger' onClick={() => handleDelete(_id)}>Parts Delete</button>
    </div>
    );
};

export default ManageProduct;