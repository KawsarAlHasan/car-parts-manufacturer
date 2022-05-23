import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, price, quantity, supplierName, email } = part;
    const navigate = useNavigate();

    const stockUpdate = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className='shadow-lg rounded text-center pb-3'>
            <h2>{name}</h2>
            <img className='img-fluid' src={img} alt="" />
            <h6>Price: $ {price}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Supplier Name: {supplierName}</h6>
            <p>{description}</p>
            <button className='btn btn-primary' onClick={() => stockUpdate(_id)}>PLACE ORDER</button>
        </div>
    );
};

export default Part;