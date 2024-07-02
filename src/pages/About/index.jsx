import React, { Fragment } from "react";
import AboutBanner from "./components/AboutBanner";
import ChooseUsSection from "./components/ChooseUsSection";
import TeamSection from "./components/TeamSection";
import TestimonialSlider from "../Home/components/TestimonialSlider";

const About = () => {
    return (
        <Fragment>
            <AboutBanner />
            <ChooseUsSection />
            <TeamSection />
            <TestimonialSlider />
        </Fragment>
    );
};

export default About;
