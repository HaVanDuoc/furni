import React from "react";

const WeHelpSection = () => {
    const imageSources = [
        "assets/images/img-grid-2.jpg",
        "assets/images/img-grid-1.jpg",
        "assets/images/img-grid-3.jpg",
    ];

    const items = [
        "Donec vitae odio quis nisl dapibus malesuada",
        "Donec vitae odio quis nisl dapibus malesuada",
        "Donec vitae odio quis nisl dapibus malesuada",
        "Donec vitae odio quis nisl dapibus malesuada",
    ];

    return (
        <div className="we-help-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="imgs-grid">
                            {imageSources.map((src, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-${index + 1}`}
                                >
                                    <img src={src} alt={`img ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-5">
                        <h2 className="section-title mb-4">
                            We Help You Make Modern Interior Design
                        </h2>
                        <p>
                            Donec facilisis quam ut purus rutrum lobortis. Donec
                            vitae odio quis nisl dapibus malesuada. Nullam ac
                            aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada
                        </p>

                        <ul className="list-unstyled custom-list my-4">
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>
                            <a href="/#" className="btn">
                                Explore
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeHelpSection;
