import Header from "./Header";
import Footer from "./Footer";

import React from "react";
import "./layouts.css";
export default function Layouts({ children }) {
    return (
        <>
            <Header />
            <div className="container-content">{children}</div>
            <Footer />
        </>
    );
}
