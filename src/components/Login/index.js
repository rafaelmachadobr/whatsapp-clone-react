import React from "react";
import "./styles.css";
import Api from "../../Api";

export default function Login({onReceive}) {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro!");
    }
  };

  return (
    <div className="login">
      <h1>WhatsApp Clone</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
        alt="WhatsApp"
      />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <button className="entrar">Entrar</button>
      <button onClick={handleFacebookLogin}>Entrar com o Facebook</button>
    </div>
  );
}
