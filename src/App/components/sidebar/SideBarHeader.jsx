import React from "react";
import { IoMdCreate } from "react-icons/io";

const SideBarHeader = () => {
  return (
    <div className="sidebar__header">
      <div className="header__headerRight">
        <h2>xcoder Rooms</h2>
        <div className="headerRight__userStatus">
          <span></span>
          <h4> Xcoder </h4> {/* userName */}
        </div>
      </div>
      <div className="header__headerLeft">
        <IoMdCreate className="icon" />
      </div>
    </div>
  );
};

export default SideBarHeader;
