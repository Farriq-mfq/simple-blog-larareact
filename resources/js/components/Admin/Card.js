import axios from "axios";
import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export function Card(props) {
    const navigate = useNavigate();
    const [btnLoader, setBtnLoader] = useState(false);
    async function HanldeRemove() {
        setBtnLoader(true);
        const token = localStorage.getItem("token");
        await axios
            .delete(`/api/v1/admin/blog/${props.blogid}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response);
                props.getData();
            })
            .catch(() => {
                setBtnLoader(false);
            });
    }
    return (
        <div className="w-full relative bg-white shadow-lg rounded-lg h-14 p-2 my-3 flex justify-between items-center">
            <h1 className="font-semibold text-md text-gray-600">
                {props.title}
            </h1>
            <div className="flex space-x-2">
                <button
                    className="p-2 bg-indigo-400 shadow-lg text-white"
                    onClick={() => {
                        return navigate(`/admin/post/${props.blogid}/edit`);
                    }}
                >
                    Edit
                </button>
                <button
                    disabled={btnLoader}
                    className="p-2 bg-red-400 shadow-lg text-white"
                    onClick={HanldeRemove}
                >
                    {btnLoader ? (
                        <ImSpinner8 className="animate-spin" />
                    ) : (
                        "Remove"
                    )}
                </button>
            </div>
        </div>
    );
}
