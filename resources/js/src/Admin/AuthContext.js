import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState([]);
    const [islogin, setIslogin] = useState(true);
    const [loading, setLoading] = useState(true);
    const [loginState, setLoginState] = useState({
        validate: [],
        loading: false,
        error: false,
    });
    const navigate = useNavigate();
    const AuthState = {
        user,
        islogin,
        loading,
        loginState,
        signOut() {
            localStorage.removeItem("token");
            AuthState.userRefresh();
            delete axios.defaults.headers.common["Authorization"];
            navigate("/admin/login");
        },
        async signIn(data) {
            setLoginState({ loading: true, validate: [], error: false });
            await axios
                .post("/api/v1/admin/login", data)
                .then((response) => {
                    navigate("/admin");
                    localStorage.setItem("token", response.data.data.token);
                    AuthState.userRefresh();
                    setLoginState({
                        validate: [],
                        loading: false,
                        error: false,
                    });
                })
                .catch((response) => {
                    setLoginState({
                        validate: [],
                        loading: false,
                        error: false,
                    });
                    if (response.response.data.validate) {
                        setLoginState({
                            validate: response.response.data.data,
                            loading: false,
                            error: false,
                        });
                    } else {
                        setLoginState({
                            loading: false,
                            validate: [],
                            error: true,
                        });
                    }
                });
        },
        async userRefresh() {
            const token = localStorage.getItem("token");
            if (token) {
                setLoading(true);
                await axios
                    .get("/api/v1/admin/admin", {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    })
                    .then((response) => {
                        setUser(response.data.data);
                        setIslogin(true);
                        setLoading(false);
                        console.log(response.data.data);
                    })
                    .catch(() => {
                        setLoading(false);
                        setIslogin(false);
                    });
            } else {
                setLoading(false);
                setIslogin(false);
            }
        },
    };
    useEffect(() => {
        AuthState.userRefresh();
    }, []);
    return (
        <AuthContext.Provider value={AuthState}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
