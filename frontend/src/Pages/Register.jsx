import React from "react";
import "../styles/form.css";
import GoogleButton from "react-google-button";
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import getGoogleOAuthURL from "../helpers/getGoogleUrl";
import { BaseUrl } from "../constants/BaseUrl";
import getFacebookOAuthURL from "../helpers/getFacebookUrl";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNoHp] = useState("");
  const [date, setDate] = useState("");
  const [negara, setNegara] = useState("");
  const [domisili, setDomisili] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      email,
      fullname,
      password,
      confirmPassword,
    };
    axios
      .post("http://localhost:8000/v1/user/register", data)
      .then(response => {
        localStorage.setItem(response.data.Message);
        Toast.success("Akun berhasil dibuat. ");
        navigate("/");
      })
      .catch(error => {
        console.error(error.response.data.message);
        Toast.error(error.response.data.message);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <h1
      style={{
        marginBottom: "10px",
        color: "#df1a35",
        fontWeight: "bold",
        fontSize: "35px",
       
      }}
      >Daftar Akun Baru</h1>
        <p>Nama Lengkap</p>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <p>No Hanphone</p>
        <input 
        type="number" 
        placeholder="No Hanphone"
        value={nohp}
        onChange={event => setNoHp(event.target.value)}
        />
       <p>Tanggal Lahir</p>
       <input 
       type="date" 
       placeholder="Tanggal lahir"
       value={date}
       onChange={event => setDate(event.target.value)}
       />
       <p>Negara</p>
        <input
          type="text"
          placeholder="Negara"
          value={negara}
          onChange={event => setNegara(event.target.value)}
        />
        <p>Domisili</p>
        <input
          type="text"
          placeholder="Domisili"
          value={domisili}
          onChange={event => setDomisili(event.target.value)}
        />
        <p>Kata Sandi</p>
        <input
          type="password"
          placeholder="Kata Sandi"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <p>Konfirmasi Kata Sandi</p>
        <input
          type="password"
          placeholder="Konfirmasi Kata Sandi"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
        />
        <button type="submit"
        style={{
            backgroundColor: "blue"
        }}
        >Daftar</button>
        <div className="other">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <a href={getGoogleOAuthURL(BaseUrl.REGISTER_REDIRECT)}>
          <GoogleButton style={{ width: "100%" }} />
        </a>
        <a href={getFacebookOAuthURL(BaseUrl.FACEBOOK_REGISTER_REDIRECT)}>
          Facebook
        </a>
      </form>
    </div>
  );
};

export default Register;
