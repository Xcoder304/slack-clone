import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase/db";
import "../../Styles/chat.css";

const Chats = () => {
  const { channels } = useParams();
  const [Channels, setchannels] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "channels");
    const q = query(collectionRef);
    const getData = onSnapshot(q, (snapshot) => {
      setchannels(snapshot.docs.map((data) => data.data()));
    });
  }, []);

  console.log(Channels);

  return (
    <div className="chats">
      <h1>#mem</h1>
    </div>
  );
};

export default Chats;
