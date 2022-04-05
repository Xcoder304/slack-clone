import React from "react";

// ui components
import Avatar from "@mui/material/Avatar";

// icons
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ContextVal } from "../context/Context";

// style
import "../Styles/header.css";

const Header = () => {
  const [{ user }, dispatch] = ContextVal();

  console.log(user.user.photoURL);
  return (
    <header className="header">
      <div className="header__userAvatar">
        <Avatar
          alt={user.user.displayName}
          src={user.user.photoURL}
          className="avatar"
        ></Avatar>

        <BiChevronDown className="icon" />
      </div>

      <div className="header__search">
        <input type="text" placeholder="Search channels.." />
        <FiSearch className="icon" />
      </div>
      <div className="header__details">
        <AiOutlineQuestionCircle className="icon" />
        <span>details</span>
      </div>
    </header>
  );
};

export default Header;
