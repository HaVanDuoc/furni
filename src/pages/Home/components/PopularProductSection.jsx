import React from "react";

const PopularProductSection = () => {
    const products = [
        {
            id: 1,
            title: "Nordic Chair",
            description:
                "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
            imageSrc: "assets/images/product-1.png",
            altText: "Nordic Chair Image",
        },
        {
            id: 2,
            title: "Kruzo Aero Chair",
            description:
                "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
            imageSrc: "assets/images/product-2.png",
            altText: "Kruzo Aero Chair Image",
        },
        {
            id: 3,
            title: "Ergonomic Chair",
            description:
                "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
            imageSrc: "assets/images/product-3.png",
            altText: "Ergonomic Chair Image",
        },
    ];

    return (
        <div className="popular-product">
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
                        >
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.altText}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pt-3">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <p>
                                        <a href="/#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularProductSection;
