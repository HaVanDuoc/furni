import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
    const posts = [
        {
            id: 1,
            title: "First Time Home Owner Ideas",
            author: "Kristin Watson",
            date: "Dec 19, 2021",
            imgSrc: "assets/images/post-1.jpg",
        },
        {
            id: 2,
            title: "How To Keep Your Furniture Clean",
            author: "Robert Fox",
            date: "Dec 15, 2021",
            imgSrc: "assets/images/post-2.jpg",
        },
        {
            id: 3,
            title: "Small Space Furniture Apartment Ideas",
            author: "Kristin Watson",
            date: "Dec 12, 2021",
            imgSrc: "assets/images/post-3.jpg",
        },
    ];

    return (
        <div className="blog-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h2 className="section-title">Recent Blog</h2>
                    </div>
                    <div className="col-md-6 text-start text-md-end">
                        <Link to="/#" className="more">
                            View All Posts
                        </Link>
                    </div>
                </div>

                <div className="row">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0"
                        >
                            <div className="post-entry">
                                <Link to="/#" className="post-thumbnail">
                                    <img
                                        src={post.imgSrc}
                                        alt={post.title}
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="post-content-entry">
                                    <h3>
                                        <Link to="/#">{post.title}</Link>
                                    </h3>
                                    <div className="meta">
                                        <span>
                                            by{" "}
                                            <Link to="/#">{post.author}</Link>
                                        </span>{" "}
                                        <span>
                                            on <Link to="/#">{post.date}</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
