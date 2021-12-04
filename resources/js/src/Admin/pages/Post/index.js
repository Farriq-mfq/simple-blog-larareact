import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaPaperPlane } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useLocation, useParams } from "react-router-dom";
export default function index() {
    const [cmeta, setCmeta] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsedit] = useState(false);
    const [alert, setAlert] = useState({});
    const [inputData, setInputData] = useState({
        title: "",
        short_description: "",
        content: "",
        tag: "",
        thumbnail: [],
        meta_title: "",
        meta_description: "",
    });
    const params = useParams();
    const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
        useDropzone({
            multiple: false,
            onDrop: (acceptedFiles) => {
                setInputData({ ...inputData, ["thumbnail"]: acceptedFiles });
            },
        });
    const [validate, setValidate] = useState({});
    const handleChangeInput = (e) => {
        const name = e.target.name;
        setInputData({
            ...inputData,
            [name]: e.target.value,
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const formdata = new FormData();
        formdata.append("title", inputData.title);
        formdata.append("short_description", inputData.short_description);
        formdata.append("content", inputData.content);
        formdata.append("tag", inputData.tag);
        formdata.append("thumbnail", inputData.thumbnail[0]);
        formdata.append("meta_title", inputData.meta_title);
        formdata.append("meta_description", inputData.meta_description);
        setLoading(true);
        axios
            .post("/api/v1/admin/blog", formdata, {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization: "Bearer " + token,
                },
            })
            .then(() => {
                setAlert({
                    type: "success",
                    message: "Success Posting Blog",
                });
                setValidate({});
                document.getElementById("form-post").reset();
                removeFiles();
                setLoading(false);
            })
            .catch((err) => {
                if (err.response.data.validate) {
                    setValidate(err.response.data.data);
                    console.log(err.response.data.data.title[0]);
                } else {
                    setAlert({
                        type: "error",
                        message: "Failed",
                    });
                }
                setLoading(false);
            });
    }
    function handleSubmitEdit(e) {
        e.preventDefault();
        console.log("called");
    }
    const removeFiles = () => {
        acceptedFiles.splice(0, 1);
        setInputData({ ...inputData, ["thumbnail"]: [] });
    };
    async function getEdit(id) {
        await axios
            .get(`/api/v1/admin/blog/${params.id}/edit`, {
                headers: {
                    Authorization: "bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                const data = response.data.data[0];
                setInputData(...inputData, {
                    title: data.title,
                    short_description: data.short_description,
                    content: data.content,
                    tag: data.tag,
                    thumbnail: [],
                    meta_title: data.meta_title,
                    meta_description: data.meta_description,
                });
                console.log(inputData);
            });
    }
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname.split("/").pop();
        if (path === "edit") {
            setIsedit(true);
            getEdit();
        } else {
            setIsedit(false);
        }
    }, [location]);
    return (
        <div className="bg-white shadow-lg rounded-lg p-2">
            <form
                onSubmit={isEdit ? handleSubmitEdit : handleSubmit}
                id="form-post"
            >
                <div className="my-2 flex items-center h-8">
                    <h1 className="text-gray-600 text-xl font-bold mr-2">
                        {isEdit ? "UPDATE" : "POST"} BLOG
                    </h1>
                    <FaPaperPlane />
                </div>
                {alert.type && (
                    <div className="my-2 flex items-center h-8">
                        <div
                            className={`text-white ${
                                alert.type == "success"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                            } p-2 text-md w-full font-bold mr-2`}
                        >
                            {alert.message}
                        </div>
                    </div>
                )}
                <div className="my-2">
                    <input
                        type="text"
                        className={`w-full outline-none p-2 ${
                            validate.title
                                ? "border-2 border-red-600"
                                : "border border-gray-600"
                        }`}
                        placeholder="Title of blog"
                        name="title"
                        onChange={handleChangeInput}
                        value={isEdit ? inputData.title : ""}
                    />
                    {validate.title && (
                        <div className="text-red-500 mt-1">
                            {validate.title[0]}
                        </div>
                    )}
                </div>
                <div className="my-2">
                    <textarea
                        className={`w-full text-gray-500 outline-none p-2 ${
                            validate.short_description
                                ? "border-2 border-red-600"
                                : "border border-gray-600"
                        }`}
                        name="short_description"
                        onChange={handleChangeInput}
                    >
                        Short description
                    </textarea>
                    {validate.short_description && (
                        <div className="text-red-500 mt-1">
                            {validate.short_description[0]}
                        </div>
                    )}
                </div>
                <div className="my-2">
                    <CKEditor
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setInputData({
                                ...inputData,
                                ["content"]: data,
                            });
                        }}
                    />
                    {validate.content && (
                        <div className="text-red-500 mt-1">
                            {validate.content[0]}
                        </div>
                    )}
                </div>
                <div className="my-2">
                    <input
                        type="text"
                        className="w-full outline-none border border-gray-600 px-2 py-4"
                        placeholder="Tag of blog"
                        name="tag"
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="my-2">
                    {inputData.thumbnail.length == 0 && (
                        <section className="container">
                            <div {...getRootProps({ isDragActive })}>
                                <input {...getInputProps()} />
                                <div
                                    className={`bg-gray-200 flex items-center justify-center h-24 w-full transform ${
                                        isDragActive
                                            ? "scale-105 transition-transform"
                                            : "scale-100 transition-transform"
                                    }`}
                                >
                                    Drag 'n' drop some files here, or click to
                                    select files
                                </div>
                            </div>
                        </section>
                    )}
                    {validate.thumbnail && (
                        <div className="text-red-500 mt-1">
                            {validate.thumbnail[0]}
                        </div>
                    )}

                    {acceptedFiles &&
                        acceptedFiles.map((files) => {
                            return (
                                <ul>
                                    <li key={files.path}>
                                        {files.path}{" "}
                                        <button
                                            className="bg-red-500 text-white p-2"
                                            onClick={removeFiles}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                </ul>
                            );
                        })}
                </div>
                <div className="my-2">
                    {!cmeta && (
                        <button
                            type="button"
                            className="bg-gray-200 p-2"
                            onClick={() => {
                                setCmeta(true);
                            }}
                        >
                            Custom meta data
                        </button>
                    )}
                    {cmeta && (
                        <button
                            type="button"
                            className="bg-gray-200 p-2"
                            onClick={() => {
                                setCmeta(false);
                            }}
                        >
                            Cencel custom meta data
                        </button>
                    )}
                </div>
                {cmeta && (
                    <>
                        <div className="my-2">
                            <input
                                type="text"
                                className="w-full outline-none border border-gray-600 px-2 py-4"
                                placeholder="Meta title of blog"
                                name="meta_title"
                                onChange={handleChangeInput}
                            />
                        </div>

                        <div className="my-2">
                            <textarea
                                className="w-full text-gray-500 outline-none border border-gray-600 p-2"
                                name="meta_description"
                                onChange={handleChangeInput}
                            >
                                Meta description of blog
                            </textarea>
                        </div>
                    </>
                )}
                <div className="my-2">
                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-blue-500 text-white shadow-lg flex items-center py-2 px-4"
                    >
                        <span className="mr-2">
                            {isEdit
                                ? loading
                                    ? "Updating..."
                                    : "Update"
                                : loading
                                ? "Posting..."
                                : "Post"}
                        </span>
                        {loading ? (
                            <ImSpinner8 className="animate-spin" />
                        ) : (
                            <FaPaperPlane />
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
