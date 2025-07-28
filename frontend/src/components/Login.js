import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Giriş işlemi burada yapılır
    console.log("Login:", username, password);
  };

  const handleRegisterRedirect = () => {
    window.location.href = "/register";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <p className="register-text">Don't you have an account?</p>
        <button onClick={handleRegisterRedirect} className="register-button">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Login;