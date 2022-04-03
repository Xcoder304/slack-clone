import { useState, useEffect } from "react";
import "../../Styles/sidebar.css";
import SideBarHeader from "./SideBarHeader";
import SideBarOptions from "./SideBarOptions";

// all icons
import { FaHashtag } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

// firebase
import { db } from "../../firebase/db";

import {
  collection,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const SideBar = () => {
  const [channels, setchannels] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "channels");
    const q = query(collectionRef, orderBy("time", "desc"));
    const display = onSnapshot(q, (snapshot) => {
      setchannels(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <SideBarHeader />

      <hr className="divder" />
      <div className="sidebar__sidebarOptionContainer">
        <SideBarOptions Icon={IoHome} title={"Home"} />
        <SideBarOptions Icon={FaRegCommentDots} title={"All Tags"} />
        <SideBarOptions Icon={IoSettingsOutline} title={"Setting"} />
        <SideBarOptions Icon={BsThreeDotsVertical} title={"More"} />
        <hr className="divder" />

        {/* channels */}
        <div className="sidebarOptionContainer__chennals">
          <SideBarOptions Icon={MdAdd} AddIcon={MdAdd} title={"Add Chennels"} />
          {/* Add icons */}

          {channels.map(({ id, data: { name } }) => {
            return (
              <SideBarOptions key={id} id={id} Icon={FaHashtag} title={name} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
