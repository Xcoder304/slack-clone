import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import {
  onSnapshot,
  doc,
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/db";

import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

import "../../Styles/chat.css";
import ChatMessages from "./ChatMessages";
import { AiOutlineSend } from "react-icons/ai";
import { ContextVal } from "../../context/Context";

const Chats = () => {
  const { channelsID } = useParams();
  const [ChannelsInfo, setchannelsInfo] = useState([]);
  const [channelMessages, setchannelMessages] = useState([]);
  const [userMessage, setUsermessage] = useState("");

  const [{ user }, dispatch] = ContextVal();

  useEffect(() => {
    if (channelsID) {
      const unsub = onSnapshot(doc(db, "channels", channelsID), (doc) => {
        setchannelsInfo(doc.data());
      });

      return () => unsub();
    }
  }, [channelsID]);

  useEffect(() => {
    if (channelsID) {
      const collectionRef = collection(db, "channels", channelsID, "messages");
      const q = query(collectionRef, orderBy("time", "desc"));
      const display = onSnapshot(q, (snapshot) => {
        setchannelMessages(
          snapshot.docs.map((data) => ({ id: data.id, data: data.data() }))
        );
      });
    }
  }, [channelsID]);

  const AddMessage = (e) => {
    e.preventDefault();

    if (userMessage) {
      addDoc(collection(db, "channels", channelsID, "messages"), {
        text: userMessage,
        time: serverTimestamp(),
        username: user.user.displayName,
      });

      setUsermessage("");
    }
  };

  return (
    <div className="chats">
      {/* header */}

      <div className="chat__header">
        <div className="header__headerRight">
          <h3>#{ChannelsInfo?.name}</h3>
          <AiOutlineStar className="icon" />
        </div>

        <div className="header__headerLeft">
          <AiOutlineInfoCircle className="icon" />
          <span>details</span>
        </div>
      </div>

      {/* messages */}

      <div className="chat__message">
        {channelMessages.map(({ id, data: { text, time, username } }) => {
          return (
            <ChatMessages
              key={id}
              text={text}
              time={time}
              username={username}
            />
          );
        })}

        {/* add chat */}
        <div className="chat__addChat">
          <form onSubmit={AddMessage}>
            <input
              type="text"
              placeholder="Enter Message"
              onChange={(e) => setUsermessage(e.target.value)}
              value={userMessage}
            />
            <button className="addChat__sendButton">
              <AiOutlineSend className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chats;
