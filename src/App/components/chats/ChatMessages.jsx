import React from "react";
import Avatar from "@mui/material/Avatar";

const ChatMessages = ({ text, time, username, userprofile }) => {
  return (
    <div className="message__info">
      <div className="message__top">
        <div className="messages__userInfo">
          <Avatar
            alt={username}
            src={userprofile}
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
