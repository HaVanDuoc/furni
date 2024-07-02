import React from "react";

const WhyChooseUsSection = () => {
    const features = [
        {
            imgSrc: "assets/images/truck.svg",
            imgAlt: "Image-truck",
            title: "Fast & Free Shipping",
            des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
        },
        {
            imgSrc: "assets/images/bag.svg",
            imgAlt: "Image-bag",
            title: "Easy to Shop",
            des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
        },
        {
            imgSrc: "assets/images/support.svg",
            imgAlt: "Image-support",
            title: "24/7 Support",
            des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
        },
        {
            imgSrc: "assets/images/return.svg",
            imgAlt: "Image-return",
            title: "Hassle Free Returns",
            des: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
        },
    ];

    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique.
                        </p>

                        <div className="row my-5">
                            {features.map((feature, index) => (
                                <div className="col-6 col-md-6" key={index}>
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src={feature.imgSrc}
                                                alt={feature.imgAlt}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.des}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img
                                src="assets/images/why-choose-us-img.jpg"
                                alt="Image-choose"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;
