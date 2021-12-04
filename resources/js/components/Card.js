import { replace } from "lodash";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Card(props) {
    const navigate = useNavigate();
    return (
        <div class="p-4 flex flex-shrink">
            <div class="flex flex-shrink sm:flex-row flex-col">
                <div class="flex flex-1">
                    <img
                        class="object-cover overflow-hidden"
                        src={`/storage/images/${props.blog.thumbnail}`}
                        alt="image"
                    />
                </div>
                <div class="flex flex-1 flex-col space-y-2 p-3.5 min-w-0">
                    <Link
                        class="object-cover cursor-pointer text-gray-800 font-extrabold text-2xl"
                        to={`/blog/${props.blog.slug}`}
                    >
                        {props.blog.judul}
                    </Link>
                    <p class="text-gray-600">{props.blog.short_description}</p>
                </div>
            </div>
        </div>
    );
}
