import React from "react";
import Layouts from "./layouts";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
export default function App() {
    return (
        <BrowserRouter>
            <Layouts>
                <Routers />
            </Layouts>
        </BrowserRouter>
    );
}
