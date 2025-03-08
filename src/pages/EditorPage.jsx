import React, { useState, useRef } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { useLocation } from "react-router-dom";

const EditorPage = () => {
  const socketRef = useRef(null);
  userEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.emit(ACTIONS.JOIN, {
        roomID,
        username: 
      });
    };
    init();
  }, []);
  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Rakesh" },
    { socketId: 3, username: "BABA B" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/coding.png" alt="coding image" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
