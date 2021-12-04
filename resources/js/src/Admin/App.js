import React from "react";
import Layouts from "./layouts";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import { AuthProvider } from "./AuthContext";
export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layouts>
                    <Routers />
                </Layouts>
            </AuthProvider>
        </BrowserRouter>
    );
}
