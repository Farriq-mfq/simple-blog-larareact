import Header from "./Header";
import Footer from "./Footer";
import "./layouts.css";
import { useAuth } from "../AuthContext";
export default function Index({ children }) {
    const { islogin } = useAuth();
    return (
        <>
            {islogin && <Header />}
            <div className="content__admin p-3">{children}</div>
            {islogin && <Footer />}
        </>
    );
}
