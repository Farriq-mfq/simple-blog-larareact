import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/portfolio";
import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portFolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </>
    );
}
