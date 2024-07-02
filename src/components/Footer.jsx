import React from "react";

const Footer = () => {
    const socialLinks = [
        { iconClass: "fa fa-brands fa-facebook-f", link: "/#" },
        { iconClass: "fa fa-brands fa-twitter", link: "/#" },
        { iconClass: "fa fa-brands fa-instagram", link: "/#" },
        { iconClass: "fa fa-brands fa-linkedin", link: "/#" },
    ];

    const footerLinks = [
        {
            title: "About us",
            links: ["About us", "Services", "Blog", "Contact us"],
        },
        {
            title: "Support",
            links: ["Support", "Knowledge base", "Live chat"],
        },
        {
            title: "Company",
            links: ["Jobs", "Our team", "Leadership", "Privacy Policy"],
        },
        {
            title: "Products",
            links: ["Nordic Chair", "Kruzo Aero", "Ergonomic Chair"],
        },
    ];

    return (
        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img
                        src="assets/images/sofa.png"
                        alt="Image4"
                        className="img-fluid"
                    />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img
                                        src="assets/images/envelope-outline.svg"
                                        alt="Image4"
                                        className="img-fluid"
                                    />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>

                            <form action="/#" className="row g-3">
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap">
                            <a href="/#" className="footer-logo">
                                Furni<span>.</span>
                            </a>
                        </div>
                        <p className="mb-4">
                            Donec facilisis quam ut purus rutrum lobortis. Donec
                            vitae odio quis nisl dapibus malesuada. Nullam ac
                            aliquet velit. Aliquam vulputate velit imperdiet
                            dolor tempor tristique. Pellentesque habitant
                        </p>

                        <ul className="list-unstyled custom-social">
                            {socialLinks.map((socialLink, index) => (
                                <li key={index}>
                                    <a href={socialLink.link}>
                                        <span
                                            className={socialLink.iconClass}
                                        ></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            {footerLinks.map((footerLink, index) => (
                                <div
                                    key={index}
                                    className="col-6 col-sm-6 col-md-3"
                                >
                                    <ul className="list-unstyled">
                                        <li>
                                            <strong>{footerLink.title}</strong>
                                        </li>
                                        {footerLink.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href="/#">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                . All Rights Reserved. &mdash; Designed with
                                love by{" "}
                                <a href="https://untree.co">Untree.co</a>{" "}
                                Distributed By{" "}
                                <a href="https://themewagon.com">ThemeWagon</a>
                            </p>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4">
                                    <a href="/#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="/#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
