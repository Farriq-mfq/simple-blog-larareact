import axios from "axios";
import React from "react";
import { Card } from "../../../components/Card";
import { Fpl } from "../../../components/Fpl";
export default function index() {
    const [blog, setBlog] = React.useState([]);
    async function getAll() {
        await axios.get("/api/v1/blog").then((response) => {
            setBlog(response.data.data);
        });
    }

    React.useEffect(() => {
        getAll();
    }, []);
    return (
        <div className="flex flex-wrap w-full relative">
            <div className="flex flex-col flex-wrap  w-full lg:w-2/3  border-gray-300 lg:border-r">
                {blog.length > 0
                    ? blog.map((blogs) => {
                          return (
                              <div className="w-full my-2">
                                  <Card blog={blogs} />
                              </div>
                          );
                      })
                    : "data not found"}
            </div>

            <div className="w-full lg:w-1/3 relative lg:absolute lg:right-0">
                <Fpl />
            </div>
        </div>
    );
}
