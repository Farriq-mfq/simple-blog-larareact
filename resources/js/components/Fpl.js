import React from "react";
import "./fpl.css";
export function Fpl() {
    return (
        <div className="p-4 flex flex-col h-full p-1">
            <div className="flex flex-col flex-1">
                <h1 className="text-xl font-bold pl-2.5 title_fpl">
                    Featured Post
                </h1>
                <h2 class="object-cover cursor-pointer text-gray-800 font-semibold text-md my-3 pl-2.5">
                    Deliver what your customers <br />
                    want every time
                </h2>
                <div class="flex flex-1 pl-2.5">
                    <img
                        class="object-cover overflow-hidden"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixqx=4ciQ7zshM1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt="image"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1 my-3">
                <h1 className="text-xl font-bold pl-2.5 title_fpl">
                    Populer Post
                </h1>
                <ul className="mt-2 pl-2.5">
                    <li className="my-2">
                        <a href="#">Hallo world</a>
                    </li>
                    <li className="my-2">
                        <a href="#">Hallo world</a>
                    </li>
                    <li className="my-2">
                        <a href="#">Hallo world</a>
                    </li>
                    <li className="my-2">
                        <a href="#">Hallo world</a>
                    </li>
                    <li className="my-2">
                        <a href="#">Hallo world</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col flex-1">
                <h1 className="text-xl font-bold pl-2.5 title_fpl">
                    Label Post
                </h1>
                <ul className="pl-2.5 grid grid-cols-4 gap-1 flex-wrap mt-2">
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                    <li className="bg-gray-200 text-gray-800 p-2 text-center">
                        <a href="" className="inline-block w-full h-full">
                            Hallo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
