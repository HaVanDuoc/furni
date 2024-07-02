import React, { Fragment } from "react";
import BannerServices from "./BannerServices";
import TestimonialSlider from "../Home/components/TestimonialSlider";
import ProductSection from "../Home/components/ProductSection";

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
