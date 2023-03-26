import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import "./styles.css";

import MessageItem from "../MessageItem";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

export default function CharWindow({ user }) {
  const body = useRef();

  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 123, body: "Olá, tudo bem?" },
    { author: 1234, body: "Olá, tudo bem?" },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + e.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };
  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };
  const handleSendClick = () => {};

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
      <div ref={body} className="chat-window-body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </div>
      <div
        className="chat-window-emoji-area"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          searchDisabled
          onEmojiClick={handleEmojiClick}
          skinTonesDisabled
        />
      </div>
      <div className="chat-window-footer">
        <div className="chat-window-pre">
          <div
            className="chat-window-btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chat-window-btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>

        <div className="chat-window-input-area">
          <input
            type="text"
            className="chat-window-input"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="chat-window-pos">
          {text === "" && (
            <div className="chat-window-btn" onClick={handleMicClick}>
              <MicIcon style={{ color: listening ? "#126ece" : "#919191" }} />
            </div>
          )}

          {text !== "" && (
            <div className="chat-window-btn">
              <SendIcon
                style={{ color: "#919191" }}
                onClick={handleSendClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
