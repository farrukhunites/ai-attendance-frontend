import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../Components/images/logo.png";
import { adminLogin } from "../API/Auth";
import { Button, notification } from "antd";

const AdminLogin = ({ setIsLoggedIn }) => {
  const [loading, setLoading] = useState(false); // State to manage the loading spinner on the button

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight",
    });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Show loading spinner
    try {
      const response = await adminLogin(username, password);
      openNotification("success", "Login Successful", response.message);
      setIsLoggedIn(true);
      console.log("Login successful:", response.admin);
      navigate("/attendance");
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

      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          className="btn btn-primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
