import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const buttons = [
        { to: "/#", label: "Shop Now", className: "btn btn-secondary me-2" },
        { to: "/#", label: "Explore", className: "btn btn-white-outline" },
    ];

    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>
                                Modern Interior{" "}
                                <span className="d-block">Design Studio</span>
                            </h1>
                            <p className="mb-4">
                                Donec vitae odio quis nisl dapibus malesuada.
                                Nullam ac aliquet velit. Aliquam vulputate velit
                                imperdiet dolor tempor tristique.
                            </p>
                            <p>
                                {buttons.map((button, index) => (
                                    <Link
                                        key={index}
                                        to={button.to}
                                        className={button.className}
                                    >
                                        {button.label}
                                    </Link>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img
                                src="assets/images/couch.png"
                                className="img-fluid"
                                alt="Couch"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
