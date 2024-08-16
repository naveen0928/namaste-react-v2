import { useState, useContext } from "react";
import { HEADER_LOGO } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between border border-s-black shadow-sm">
      <div>
        <img className="w-[100px] h-[80px]" src={HEADER_LOGO} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex pr-10">
          <li className="pr-4">OnlineStatus: {onlineStatus ? "🟢" : "😡"} </li>
          <li className="pr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="pr-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="pr-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pr-4 font-bold">
            <Link to="/cart">Cart - ({cartItems?.length} items)</Link>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </li>
          <li className="pl-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
