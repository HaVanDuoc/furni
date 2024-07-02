import React from "react";
import { Link } from "react-router-dom";

const ProductSection = () => {
    const products = [
        {
            imgSrc: "assets/images/product-1.png",
            title: "Nordic Chair",
            price: "$50.00",
            link: "cart.html",
        },
        {
            imgSrc: "assets/images/product-2.png",
            title: "Kruzo Aero Chair",
            price: "$78.00",
            link: "cart.html",
        },
        {
            imgSrc: "assets/images/product-3.png",
            title: "Ergonomic Chair",
            price: "$43.00",
            link: "cart.html",
        },
    ];

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">
                            Crafted with excellent material.
                        </h2>
                        <p className="mb-4">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique.
                        </p>
                        <p>
                            <Link to="shop.html" className="btn">
                                Explore
                            </Link>
                        </p>
                    </div>

                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                        >
                            <Link to={product.link} className="product-item">
                                <img
                                    src={product.imgSrc}
                                    className="img-fluid product-thumbnail"
                                    alt={product.title}
                                />
                                <h3 className="product-title">
                                    {product.title}
                                </h3>
                                <strong className="product-price">
                                    {product.price}
                                </strong>

                                <span className="icon-cross">
                                    <img
                                        src="assets/images/cross.svg"
                                        className="img-fluid"
                                        alt="Cross"
                                    />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
