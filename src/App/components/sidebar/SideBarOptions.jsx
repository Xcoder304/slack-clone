import React from "react";

import { db } from "../../firebase/db";

import { collection, serverTimestamp, addDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const SideBarOptions = ({ AddIcon, title, Icon, id }) => {
  const navigate = useNavigate();

  const AddChannel = () => {
    const ChennalName = prompt("Please Enter The Chennnal Name");

    addDoc(collection(db, "channels"), {
      name: ChennalName,
      time: serverTimestamp(),
    });
  };

  const SeleteChannel = () => {
    if (id) {
      navigate(`/chats/${id}`);
    } else {
      navigate(title);
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={AddIcon ? AddChannel : SeleteChannel}
    >
      {Icon ? <Icon className="sidebarOption__icon" /> : ""}
      <h4 className="sidebarOption__Name">{title}</h4>
    </div>
  );
};

export default SideBarOptions;
