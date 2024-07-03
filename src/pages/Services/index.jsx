import React, { Fragment } from "react";
import TestimonialSlider from "../Home/components/TestimonialSlider";
import ProductSection from "../Home/components/ProductSection";
import BannerServices from "./components/BannerServices";

const Services = () => {
    return (
        <Fragment>
            <BannerServices />
            <ProductSection />
            <TestimonialSlider />
        </Fragment>
    );
};

export default Services;
