import ReactDom from "react-dom";
import App from "./src/App";
import AdminApp from "./src/Admin/App";
const ID = document.querySelector("#App");
if (ID) {
    ReactDom.render(<App />, ID);
}
const ID_ADMIN = document.querySelector("#Admin");
if (ID_ADMIN) {
    ReactDom.render(<AdminApp />, ID_ADMIN);
}
