import React from "react";
import BannerShop from "./components/BannerShop";

const Shop = () => {
    return (
        <div>
            <BannerShop />

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="col-12 col-md-4 col-lg-3 mb-5"
                            >
                                <a className="product-item" href="/#">
                                    <img
                                        alt=""
                                        src={product.imgSrc}
                                        className="img-fluid product-thumbnail"
                                    />
                                    <h3 className="product-title">
                                        {product.title}
                                    </h3>
                                    <strong className="product-price">
                                        {product.price}
                                    </strong>

                                    <span className="icon-cross">
                                        <img
                                            alt=""
                                            src="assets/images/cross.svg"
                                            className="img-fluid"
                                        />
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;

const products = [
    {
        imgSrc: "assets/images/product-3.png",
        title: "Nordic Chair",
        price: "$50.00",
    },
    {
        imgSrc: "assets/images/product-1.png",
        title: "Nordic Chair",
        price: "$50.00",
    },
    {
        imgSrc: "assets/images/product-2.png",
        title: "Kruzo Aero Chair",
        price: "$78.00",
    },
    {
        imgSrc: "assets/images/product-3.png",
        title: "Ergonomic Chair",
        price: "$43.00",
    },
    {
        imgSrc: "assets/images/product-3.png",
        title: "Nordic Chair",
        price: "$50.00",
    },
    {
        imgSrc: "assets/images/product-1.png",
        title: "Nordic Chair",
        price: "$50.00",
    },
    {
        imgSrc: "assets/images/product-2.png",
        title: "Kruzo Aero Chair",
        price: "$78.00",
    },
    {
        imgSrc: "assets/images/product-3.png",
        title: "Ergonomic Chair",
        price: "$43.00",
    },
];
