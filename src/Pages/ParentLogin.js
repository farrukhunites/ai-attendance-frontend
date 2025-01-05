import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../Components/images/logo.png";
import { parentLogin } from "../API/Auth";
import { Button, notification } from "antd";

const ParentLogin = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Show loading spinner
    try {
      const response = await parentLogin(email, password);
      openNotification("success", "Login Successful", response.message);
      setIsLoggedIn(true);
      console.log("Login successful:", response.parent);
      const url = `/parent-portal/${response?.parent?.id}`;
      navigate(url);
    } catch (err) {
      openNotification("error", "Login Failed", "Invalid username or password");
      console.error("Login failed:", "Invalid username or password");
    } finally {
      setLoading(false); // Hide loading spinner
    }
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
        <Button
          loading={loading}
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default ParentLogin;
