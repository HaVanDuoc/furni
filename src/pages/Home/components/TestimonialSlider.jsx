import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
    // const TestimonialNav = ({ direction }) => {
    //     return (
    //         <span className={direction} data-controls={direction}>
    //             <span
    //                 className={`fa fa-chevron-${
    //                     direction === "prev" ? "left" : "right"
    //                 }`}
    //             ></span>
    //         </span>
    //     );
    // };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
    };

    const testimonials = [
        {
            quote: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
            author: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            imgSrc: "assets/images/person-1.png",
        },
        {
            quote: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
            author: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            imgSrc: "assets/images/person-1.png",
        },
        {
            quote: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
            author: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            imgSrc: "assets/images/person-1.png",
        },
    ];

    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">Testimonials</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap text-center">
                            <div id="testimonial-nav">
                                {/* <TestimonialNav direction="prev" /> */}
                                {/* <TestimonialNav direction="next" /> */}
                            </div>

                            <div className="testimonial-slider">
                                <Slider {...settings}>
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">
                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>
                                                                &ldquo;
                                                                {
                                                                    testimonial.quote
                                                                }
                                                                &rdquo;
                                                            </p>
                                                        </blockquote>

                                                        <div className="author-info">
                                                            <div className="author-pic d-flex justify-content-center align-items-center">
                                                                <img
                                                                    src={
                                                                        testimonial.imgSrc
                                                                    }
                                                                    alt={
                                                                        testimonial.author
                                                                    }
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <h3 className="font-weight-bold">
                                                                {
                                                                    testimonial.author
                                                                }
                                                            </h3>
                                                            <span className="position d-block mb-3">
                                                                {
                                                                    testimonial.position
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
