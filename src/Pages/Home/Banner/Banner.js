import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = (props) => {
    return (
        <div className="hero min-h-5/6 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse sm:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Car Parts!</h1>
                    <p className="py-6"> Luckily, one of the best places to buy Replacement products is here at CarParts.com. We have a wide selection of Replacement components, including bumper covers, headlights, and so on. Our products are all on-hand and shipped from our strategically located warehouses, so you can receive your orders in no time.</p>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;