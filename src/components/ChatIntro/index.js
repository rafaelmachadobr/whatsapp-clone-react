import React from "react";
import "./styles.css";
import introImg from "../../imgs/intro-connection.jpg"

export default function ChatIntro() {
  return (
    <div className="chatIntro">
      <img
        src={introImg}
        alt=""
      />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
        <br />
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>
    </div>
  );
}
