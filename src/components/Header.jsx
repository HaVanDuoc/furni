import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/shop", label: "Shop" },
        { to: "/about", label: "About us" },
        { to: "/services", label: "Services" },
        { to: "/blog", label: "Blog" },
        { to: "/contact", label: "Contact us" },
    ];

    const ctaLinks = [
        { to: "/profile", imgSrc: "assets/images/user.svg", alt: "User" },
        { to: "/cart", imgSrc: "assets/images/cart.svg", alt: "Cart" },
    ];

    return (
        <nav
            className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
            aria-label="Furni navigation bar"
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Furni<span>.</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsFurni"
                    aria-controls="navbarsFurni"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <NavLink
                                    to={link.to}
                                    className="nav-link"
                                    activeClassName="active"
                                    exact={true}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        {ctaLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link className="nav-link" to={link.to}>
                                    <img src={link.imgSrc} alt={link.alt} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
