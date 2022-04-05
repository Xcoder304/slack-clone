import React from "react";
import { IoMdCreate } from "react-icons/io";
import { ContextVal } from "../../context/Context";

const SideBarHeader = () => {
  const [{ user }, dispatch] = ContextVal();
  return (
    <div className="sidebar__header">
      <div className="header__headerRight">
        <h2>{user.user.displayName} Rooms</h2>
        <div className="headerRight__userStatus">
          <span></span>
          <h4> {user.user.displayName} </h4> {/* userName */}
        </div>
      </div>
      <div className="header__headerLeft">
        <IoMdCreate className="icon" />
      </div>
    </div>
  );
};

export default SideBarHeader;
