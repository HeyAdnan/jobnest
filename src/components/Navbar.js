import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./logo";
import { logoutUser, toggleSidebar } from "../features/user/userSlice";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const  toggle = () => {
    dispatch(toggleSidebar());
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            toggle();
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDropdown?'dropdown show-dropdown':'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={() => {
              dispatch(logoutUser('Logging you out...'));
            }}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
