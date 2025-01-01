import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../Components/images/logo.png";

const ParentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., make an API call for login)
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/parent-portal");
  };

  return (
    <div className="container mt-5">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="..." />
      </div>
      <h2>Parent Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
};

export default ParentLogin;
