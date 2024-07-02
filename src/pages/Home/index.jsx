import React, { Fragment } from "react";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import WeHelpSection from "./components/WeHelpSection";
import PopularProductSection from "./components/PopularProductSection";
import TestimonialSlider from "./components/TestimonialSlider";
import BlogSection from "./components/BlogSection";

const Home = () => {
    return (
        <Fragment>
            <HeroSection />
            <ProductSection />
            <WhyChooseUsSection />
            <WeHelpSection />
            <PopularProductSection />
            <TestimonialSlider />
            <BlogSection />
        </Fragment>
    );
};

export default Home;
