import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  //whenever there is any change in roomId this useEffect will call
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      setSeed(Math.floor(Math.random() * 5000));
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("typed .>> " + input);
    setInput("");
  };

  return (
    <div className="chat">
      {/* chat header */}
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h4> {roomName} </h4>
          <p>Last seen...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* chat body */}
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Mohit Singh</span>
          Hey Guys
          <span className="chat__timestamp">3:32am</span>
        </div>
        <div className="chat__message">Hey Guys</div>
      </div>
      {/* chat footer */}
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Type a message"
          ></input>
          <button type="submit" onClick={sendMessage}>
            {/* <SendIcon /> */}
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
