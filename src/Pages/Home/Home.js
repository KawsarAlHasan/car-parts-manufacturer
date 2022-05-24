import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Faqs from './Faqs/Faqs';
import LatestNews from './LatestNews/LatestNews';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';

const Home = (props) => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <LatestNews></LatestNews>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;