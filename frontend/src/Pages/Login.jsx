
import "../styles/form.css";
// import GoogleButton from "react-google-button";
// import Toast from "../components/Toast";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import getGoogleOAuthURL from "../helpers/getGoogleUrl";
// import { BaseUrl } from "../constants/BaseUrl";
// import getFacebookOAuthURL from "../helpers/getFacebookUrl";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = {
//       username,
//       password,
//     };
//     axios
//       .post("http://localhost:8000/v1/login", data)
//       .then(response => {
//         console.log(response);
//         Toast.success("Login berhasil. ");
//         localStorage.setItem("tokenpublic", response.data.token);
//         navigate("/");
//       })
//       .catch(error => {
//         console.error(error);
//         Toast.error(error.response.data.Message);
//       });
//   };

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const Login = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      })
      history("/dashboard")
    } catch (error) {
      if (error.response){
        console.log(error.response.data);
      }
    }
  }



  return (
    <div className="form" >
      
      <form onSubmit={Login}>
      <p className='has-text-centered'>{msg}</p>
        <div className="log"
        style={{
          display: "flex",
          flexDirection: "column",
          alignitems: "flex-start"
        }}
        >
      <h1
      style={{
        marginBottom: "10px",
        color: "#df1a35",
        fontWeight: "bold",
        fontSize: "35px",
       
      }}
      >Login</h1>
       <Link to="/register" style={{ textDecoration: "none" }}>
      <p
      style={{
       top: "50px",
       margin: "10px",
       position: "absolute",
       right: "600px",
       color: "#df1a35",
       fontSize: "20px",
      }}
      >Daftar Akun Baru</p>
      </Link>
      </div>
      <br />
        <p>Email</p>
        <input
          type="text"
          placeholder="username / email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOGIN</button>
        <div className="other">
          <hr />
          <p>OR</p>
          <hr />
        </div>
{/* 
        <a href={getGoogleOAuthURL(BaseUrl.LOGIN_REDIRECT)}>
          <GoogleButton style={{ width: "100%" }} />
        </a>
        <a href={getFacebookOAuthURL(BaseUrl.FACEBOOK_LOGIN_REDIRECT)}>
          Facebook
        </a> */}

        <div className="other">
          <hr />
        </div>

      </form>
    </div>
  );
};

export default Login;
