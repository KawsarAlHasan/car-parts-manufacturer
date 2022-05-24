import React from 'react';

const BusinessSummary = (props) => {
    return (
        <div className='text-center'>
            <h1 className='py-4'>Millions <span className='text-danger'>Business Trust</span> Us</h1>
            <div className='d-flex justify-content-around container gap-3'>
                <div className='shadow'>
                    <i className="fa-solid fa-users fa-4x text-info m-4 mx-5"></i>
                    <h2>100k+</h2>
                    <h5 className='text-info mb-4'>Customers</h5>
                </div>
                <div className='shadow'>
                    <i className="fa-solid fa-sack-dollar fa-4x text-info my-4 mx-5"></i>
                    <h2>120M+</h2>
                    <h5 className='text-info mb-4'>Annual revenue</h5>
                </div>
                <div className='shadow'>
                    <i className="fa-solid fa-screwdriver-wrench fa-4x text-info my-4 mx-5"></i>
                    <h2>50+</h2>
                    <h5 className='text-info mb-4'>Tools</h5>
                </div>
                <div className='shadow'>
                <i className="fa-solid fa-flag fa-4x text-info my-4 mx-5"></i>
                    <h2>75+</h2>
                    <h5 className='text-info mb-4'>Countries</h5>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;