import React from "react";
import "./styles.css";
import Api from "../../Api";

import img from "../../imgs/login.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Login({ onReceive }) {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro!");
    }
  };

  return (
    <div className="container-login">
      <div className="img-box">
        <img src={img} alt="WhatsApp" />
      </div>
      <div className="content-box">
        <div className="form-box">
          <h2>WhatsApp - React</h2>
          <form>
            <div className="input-box">
              <span>Email</span>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-box">
              <span>Senha</span>
              <input type="password" placeholder="Senha" />
            </div>

            <div className="remember">
              <label>
                <input type="checkbox" /> Lembrar-me
              </label>
              <a href="/">Esqueceu a senha?</a>
            </div>

            <div className="input-box">
              <input type="submit" value="Entrar" />
            </div>

            <div className="input-box">
              <p>
                Não tem uma conta? <a href="/">Inscrever-ser</a>
              </p>
            </div>
          </form>
          <h3>Logar com</h3>
          <ul className="ul">
            <li>
              <FacebookIcon
                onClick={handleFacebookLogin}
                style={{ color: "#3b5998", fontSize: "40px" }}
              />
            </li>
            <li>
              <GoogleIcon style={{ color: "#db4437", fontSize: "40px" }} />
            </li>
            <li>
              <TwitterIcon style={{ color: "#1da1f2", fontSize: "40px" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
