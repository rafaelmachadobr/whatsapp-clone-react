import React from "react";
import "./chatListItem.css";

export default function ChatListItem() {
  return (
    <div className="chatListItem">
      <img
        className="chatListItem-avatar"
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
      />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">Nome do contato</div>
          <div className="chatListItem-date">19:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Olá, Tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
