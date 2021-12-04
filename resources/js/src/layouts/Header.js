import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagramSquare,
    FaPinterestSquare,
    FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <TopHeader />
            <Navbar />
        </>
    );
}

const TopHeader = () => {
    return (
        <div className="text-white bg-gray-800">
            <nav className="flex w-full justify-between items-center container">
                <ul className="flex">
                    <li className="mx-2">
                        <Link to="/">Faq</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="mx-2">
                        <a href="#">{<FaFacebookF />}</a>
                    </li>
                    <li className="mx-2">
                        <a href="#">{<FaTwitter />}</a>
                    </li>
                    <li className="mx-2">
                        <a href="#">{<FaInstagramSquare />}</a>
                    </li>
                    <li className="mx-2">
                        <a href="#">{<FaPinterestSquare />}</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const Navbar = () => {
    const NavBarShow = () => {
        const navbar = document.querySelector(".responsive__navbar");
        const overley = document.querySelector(".overley");
        navbar.classList.toggle("show");
        navbar.classList.contains("show")
            ? overley.classList.add("show_overley")
            : overley.classList.remove("show_overley");
    };
    return (
        <div className="flex justify-center flex-col w-full items-center py-4 bg-white border-b border-gray-200">
            <div className="my-3 responsive__logo">
                <h1 className="font-bold text-2xl text-center">
                    Simple blog React with Laravel
                </h1>
            </div>
            <div className="bars hidden">
                <button
                    className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center"
                    onClick={NavBarShow}
                >
                    <FaBars />
                </button>
            </div>
            <div>
                <ul className="responsive__navbar flex justify-center items-center w-full">
                    <li className="mx-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/portFolio">PortFolio</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/shop">Register</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/shop">Login</Link>
                    </li>
                </ul>
                <div
                    className="overley bg-gray-800 bg-opacity-25 md:hidden lg:hidden"
                    onClick={NavBarShow}
                ></div>
            </div>
        </div>
    );
};
