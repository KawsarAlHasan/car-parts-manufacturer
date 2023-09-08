import React from "react";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Faqs from "./Faqs/Faqs";
import LatestNews from "./LatestNews/LatestNews";
import Parts from "./Parts/Parts";
import Reviews from "./Reviews/Reviews";
import Category from "./category/Category";

const Home = (props) => {
  return (
    <div>
      <Banner></Banner>
      <div className="container my-4">
        <marquee class="styled-marquee" behavior="scroll" direction="left">
          25th August Friday, our all outlets are open except Chattogram
          Agrabad, Khulna, Rangpur & Rajshahi outlets. Additionally, our online
          activities are open and operationa
        </marquee>
      </div>
      <Category />
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <LatestNews></LatestNews>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;
