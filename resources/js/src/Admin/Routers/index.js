import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Settings from "../pages/Settings";
import Password from "../pages/Settings/Password";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
    const { islogin } = useAuth();
    return islogin ? children : <Navigate to="/admin/login" />;
};

export default function index() {
    return (
        <Routes>
            <Route
                exact
                path="/admin"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            ></Route>
            <Route
                exact
                path="/admin/post"
                element={
                    <PrivateRoute>
                        <Post />
                    </PrivateRoute>
                }
            >
                <Route
                    exact
                    path="/admin/post/:id/edit"
                    name="editPost"
                    element={<Post />}
                ></Route>
            </Route>
            <Route
                exact
                path="/admin/settings"
                element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                }
            >
                <Route path="password" element={<Password />}></Route>
            </Route>
            <Route exact path="/admin/login" element={<Login />}></Route>
        </Routes>
    );
}
