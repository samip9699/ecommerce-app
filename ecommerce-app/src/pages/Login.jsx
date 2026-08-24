import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    // Save user email
    localStorage.setItem("userEmail", email);

    alert("Login Successful");

    navigate("/");

    window.location.reload();
  };

  return (
    <div className="container my-5">

      <div
        className="card shadow p-5 mx-auto"
        style={{ maxWidth: "450px" }}
      >

        <h2 className="text-center mb-4">
          Sign In
        </h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-dark w-100"
          onClick={handleLogin}
        >
          Sign In
        </button>

      </div>

    </div>
  );
};

export default Login;