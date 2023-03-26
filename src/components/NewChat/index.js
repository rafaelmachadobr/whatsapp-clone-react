import React, { useState } from "react";
import "./styles.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NewChat({ chatlist, user, show, setShow }) {
  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Fulano de Tal",
    },
    {
      id: 124,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Beltrano de Tal",
    },
    {
      id: 125,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Ciclano de Tal",
    },
    {
      id: 126,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Fulano de Tal",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat-head">
        <div onClick={handleClose} className="newChat-backButton">
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat-headTitle">Nova Conversa</div>
      </div>
      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemAvatar" src={item.avatar} alt="" />
            <div className="newChat-itemName">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
