import { FaHome, FaPaperPlane, FaSignOutAlt, FaSlidersH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
export default function Header() {
    return (
        <>
            <Navbar />
        </>
    );
}

const Navbar = (props) => {
    const { signOut } = useAuth();
    return (
        <div className="bg-gray-800 h-14 text-white p-2">
            <ul className="flex flex-row justify-center items-center h-full w-full">
                <li className="mx-2 space-x-2 flex items-center ">
                    <FaHome />
                    <Link to="/admin">Home</Link>
                </li>
                <li className="mx-2 space-x-2 flex items-center p-1">
                    <FaPaperPlane />
                    <Link to="/admin/post">Post</Link>
                </li>
                <li className="mx-2 space-x-2 flex items-center p-1">
                    <FaSlidersH />
                    <Link to="/admin/settings">Settings</Link>
                </li>
                <li className="mx-2 space-x-2 flex items-center p-1">
                    <FaSignOutAlt />
                    <button
                        type="button"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        Sign-out
                    </button>
                </li>
            </ul>
        </div>
    );
};
