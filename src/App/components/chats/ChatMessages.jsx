import React from "react";
import Avatar from "@mui/material/Avatar";

const ChatMessages = ({ text, time, username }) => {
  console.log(username);
  return (
    <div className="message__info">
      <div className="message__top">
        <div className="messages__userInfo">
          <Avatar
            alt="Remy Sharp"
            src="https://lh3.googleusercontent.com/ogw/ADea4I5XZxvNAlRMJO6i6r3pFWfvRiBL9vR5XmnKz7n9XQ=s32-c-mo"
            className="message__userProfile"
          ></Avatar>
          <span className="message__username">
            {username ? username : "unKown"}
          </span>
        </div>

        <div className="message__date">
          <span>{new Date(time?.toDate()).toUTCString().substring(0, 25)}</span>
        </div>
      </div>

      <div className="message__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessages;
