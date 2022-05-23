import React from 'react';
import img from '../../../images/not-found.jpg';

const NotFound = (props) => {
    return (
        <div className='text-center'>
            <img className='img-fluid' src={img} alt='404'/>
        </div>
    );
};

export default NotFound;