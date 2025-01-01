import React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import "./home.css";
import bg from "../Components/images/bg.jpg";
import bg2 from "../Components/images/bg2.jpg";
import ppp from "../Components/images/ppp.jpg";
import lib from "../Components/images/lib.jpg";
import col from "../Components/images/col.jpg";
import seat from "../Components/images/seat.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Carousel with Hero Section */}
      <div className="carousel-hero-wrapper">
        <Carousel autoplay className="carousel-section">
          <div>
            <img src={bg} alt="Slide 1" className="carousel-image" />
          </div>
          <div>
            <img src={bg2} alt="Slide 2" className="carousel-image" />
          </div>
          <div>
            <img src={ppp} alt="Slide 3" className="carousel-image" />
          </div>
        </Carousel>

        <div className="hero-section">
          <h1>AI-Based Attendance System</h1>
          <p>Streamline attendance tracking with AI and parental control.</p>
          <div className="hero-buttons">
            <Link to="/admin-login">
              <Button type="primary" size="large">
                Admin's Portal
              </Button>
            </Link>
            <Link to="/parent-login">
              <Button
                style={{
                  backgroundColor: "#198754",
                  color: "#fff",
                  border: "none",
                }}
                type="default"
                size="large"
              >
                Parent's Portal
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src={lib} alt="Feature 1" />
            <p>Attendance system designed for teachers' convenience.</p>
          </div>
          <div className="feature-card">
            <img src={col} alt="Feature 2" />
            <p>Allows students to check their attendance seamlessly.</p>
          </div>
          <div className="feature-card">
            <img src={seat} alt="Feature 3" />
            <p>Empowers parents to monitor attendance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
