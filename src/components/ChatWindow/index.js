import React from "react";
import "./styles.css";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

export default function CharWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <div className="chat-window-header-info">
          <img
            className="chat-window-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
          />
          <div className="chat-window-name">Nome do contato</div>
        </div>
        <div className="chat-window-header-buttons">
          <div className="chat-window-btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chat-window-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chat-window-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chat-window-body"></div>
      <div className="chat-window-emoji-area"></div>
      <div className="chat-window-footer">
        <div className="chat-window-pre">
          <div className="chat-window-btn">
            <InsertEmoticonIcon style={{ color: "#919191" }} />
          </div>
        </div>

        <div className="chat-window-input-area">
          <input
            type="text"
            className="chat-window-input"
            placeholder="Digite uma mensagem"
          />
        </div>

        <div className="chat-window-pos">
          <div className="chat-window-btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
