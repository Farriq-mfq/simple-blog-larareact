import React from "react";

export default function Password() {
    return (
        <form>
            <div className="my-2">
                <input
                    type="text"
                    className="w-full outline-none border border-gray-600 p-2"
                    placeholder="Current password"
                />
            </div>
            <div className="my-2">
                <input
                    type="text"
                    className="w-full outline-none border border-gray-600 p-2"
                    placeholder="New password"
                />
            </div>
            <div className="my-2">
                <input
                    type="text"
                    className="w-full outline-none border border-gray-600 p-2"
                    placeholder="Confirm new password"
                />
            </div>
            <div className="my-2">
                <button type="submit" className="bg-gray-200 p-2">
                    Submit
                </button>
            </div>
        </form>
    );
}
