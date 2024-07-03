import React, { Fragment } from "react";
import BannerBlog from "./components/BannerBlog";
import BlogSection from "./components/BlogSection";

const Blog = () => {
    return (
        <Fragment>
            <BannerBlog />
            <BlogSection />
        </Fragment>
    );
};

export default Blog;
