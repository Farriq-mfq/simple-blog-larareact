import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function index() {
    const { islogin, signIn, loginState } = useAuth();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const name = e.target.name;
        setLogin({ ...login, [name]: e.target.value });
    };

    const Navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(login);
        console.log(loginState.validate ? loginState.validate.email : "dkjbdk");
    };
    React.useEffect(() => {
        if (islogin) {
            Navigate("/admin");
        } else {
            Navigate("/admin/login");
        }
    }, []);
    return (
        <div className="bg-white shadow-xl p-3 rounded-xl mt-10">
            <form onSubmit={handleSubmit} id="form-post">
                <div className="my-2 flex items-center flex-col space-y-2">
                    <h1 className="text-gray-600 text-xl font-bold mr-2">
                        Login Admin
                    </h1>
                    {loginState.error && (
                        <div className="w-full bg-red-400 text-white p-1">
                            <p>Email or password wrong</p>
                        </div>
                    )}
                </div>
                <div className="my-3">
                    <input
                        type="text"
                        className={`w-full outline-none p-2
                        ${
                            loginState.validate && loginState.validate.email
                                ? " border-2 border-red-500"
                                : " border border-gray-600"
                        }
                           `}
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    {loginState.validate && loginState.validate.email && (
                        <div className="text-red-500">
                            {loginState.validate.email[0]}
                        </div>
                    )}
                </div>
                <div className="my-3">
                    <input
                        type="password"
                        className={`w-full outline-none p-2
                        ${
                            loginState.validate && loginState.validate.password
                                ? " border-2 border-red-500"
                                : " border border-gray-600"
                        }
                           `}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    {loginState.validate && loginState.validate.password && (
                        <div className="text-red-500">
                            {loginState.validate.password[0]}
                        </div>
                    )}
                </div>
                <div className="my-3">
                    <button
                        disabled={loginState.loading}
                        type="submit"
                        className={`bg-blue-500 text-white shadow-lg flex items-center py-2 px-4 ${
                            loginState.loading
                                ? "cursor-wait"
                                : "cursor-pointer"
                        } `}
                    >
                        <span className="mr-2">
                            {loginState.loading ? (
                                <ImSpinner8 className="animate-spin h-7 w-7" />
                            ) : (
                                "Login"
                            )}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}
