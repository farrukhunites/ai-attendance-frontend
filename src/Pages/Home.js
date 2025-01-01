import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../Components/images/bg.jpg";
import bg2 from "../Components/images/bg2.jpg";
import col from "../Components/images/col.jpg";
import lib from "../Components/images/lib.jpg";
import ppp from "../Components/images/ppp.jpg";
import seat from "../Components/images/seat.jpg";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ai-based Attendance System</h5>
              <p>AI-Based Attendance system with Parental Control</p>
              <div className="center-links">
                <a href="/admin-login" className="btn btn-primary">
                  Admin's Portal
                </a>
                <a href="/parent-login" className="btn btn-success">
                  Parent's Portal
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ai-based Attendance System</h5>
              <p>AI-Based Attendance system with Parental Control</p>
              <div className="center-links">
                <a href="admin.html" className="btn btn-primary">
                  Admin's Portal
                </a>
                <a href="plogin.html" className="btn btn-success">
                  Parent's Portal
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ppp} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ai-based Attendance System</h5>
              <p>AI-Based Attendance system with Parental Control</p>
              <div className="center-links">
                <a href="admin.html" className="btn btn-primary">
                  Admin's Portal
                </a>
                <a href="plogin.html" className="btn btn-success">
                  Parent's Portal
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">AI Attendance System</h5>
          <p className="card-text">With supporting facial recognition.</p>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: "100%" }}>
                <img src={lib} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Attendance system based for teachers ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "100%" }}>
                <img src={col} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Attendance that students can also check.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "100%" }}>
                <img src={seat} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Parents can also keep an eye.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
};

export default Home;
