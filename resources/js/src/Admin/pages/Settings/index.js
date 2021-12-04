import React from "react";
import { FaEdit, FaSlidersH } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export default function index() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-2">
            <form>
                <div className="my-2 flex items-center h-8">
                    <h1 className="text-gray-600 text-xl font-bold mr-2">
                        SETTINGS
                    </h1>
                    <FaSlidersH />
                </div>
                <div className="my-2">
                    <input
                        type="text"
                        className="w-full outline-none border border-gray-600 p-2"
                        placeholder="Name"
                    />
                </div>
                <div className="my-2">
                    <input
                        type="text"
                        className="w-full outline-none border border-gray-600 p-2"
                        placeholder="Email"
                    />
                </div>
                <div className="my-2">
                    <button type="submit" className="bg-gray-200 p-2">
                        Submit
                    </button>
                    <Link
                        to="/admin/settings/password"
                        className="ml-2 bg-gray-200 p-2"
                    >
                        Change password
                    </Link>
                </div>
                    <Outlet />
            </form>
        </div>
    );
}
