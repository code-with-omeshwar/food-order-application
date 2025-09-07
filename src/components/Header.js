import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [buttonStatus, setButtonStatus] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { userName } = useContext(UserContext);
    const cart = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logoContainer">
                <img className="logo w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">
                            🛒 - ({cart.length})
                        </Link>
                    </li>
                    <li>
                        <button
                            className="login-btn"
                            onClick={() => {
                                buttonStatus === "Login" ? setButtonStatus("Logout") : setButtonStatus("Login");
                            }} >
                            {buttonStatus}</button>
                    </li>
                    <li className="px-4 font-bold">
                        {userName}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;