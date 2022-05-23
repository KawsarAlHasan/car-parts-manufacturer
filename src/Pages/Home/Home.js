import React from 'react';
import Banner from './Banner/Banner';
import Faqs from './Faqs/Faqs';
import Parts from './Parts/Parts';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;