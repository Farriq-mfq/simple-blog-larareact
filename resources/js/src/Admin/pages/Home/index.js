import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "../../../../components/Admin/Card";
import CardLoader from "../../../../components/Admin/CardLoader";

export default function index() {
    const [data, setData] = useState([]);
    async function getData() {
        const token = localStorage.getItem("token");
        await axios
            .get("/api/v1/admin/blog", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                const data = response.data.text.original.data;
                setData(data);
            });
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {data ? (
                data.length > 0 ? (
                    data.map((blog) => {
                        return (
                            <Card
                                title={blog.judul}
                                blogid={blog.id}
                                getData={getData}
                                key={blog.id}
                            />
                        );
                    })
                ) : (
                    <>
                        <CardLoader />
                        <CardLoader />
                        <CardLoader />
                        <CardLoader />
                        <CardLoader />
                    </>
                )
            ) : (
                <h1>Data not found</h1>
            )}
        </div>
    );
}
