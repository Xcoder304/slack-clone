import React from "react";
import Avatar from "@mui/material/Avatar";
import { ContextVal } from "../../context/Context";

const ChatMessages = ({ text, time, username }) => {
  const [{ user }, dispatch] = ContextVal();

  return (
    <div className="message__info">
      <div className="message__top">
        <div className="messages__userInfo">
          <Avatar
            alt={user?.user?.displayName}
            src={user?.user?.photoURL}
            className="message__userProfile"
          ></Avatar>
          <span className="message__username">
            {username ? username : "unKown"}
          </span>
        </div>

        <div className="message__date">
          <span>{new Date(time?.toDate()).toUTCString()}</span>
        </div>
      </div>

      <div className="message__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessages;
