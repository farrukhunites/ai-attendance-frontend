import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1>About Us</h1>
        <p>
          Welcome to our AI-based attendance system with parental control! Our
          innovative solution leverages cutting-edge facial recognition
          technology to mark the attendance of students effortlessly and
          accurately. Our system is designed with parents in mind, ensuring that
          they are notified promptly about their child's attendance status. This
          helps in maintaining transparency and allows parents to stay informed
          about their child's presence in school.
        </p>
        <p>
          Our mission is to enhance the educational experience by providing a
          reliable and efficient attendance tracking system that not only
          benefits the school administration but also offers peace of mind to
          parents. We believe in the power of technology to transform the way we
          manage attendance, making it more secure, convenient, and trustworthy.
        </p>
        <p>
          Thank you for choosing our AI-based attendance system. We are
          committed to delivering excellence and continuously improving our
          services to meet your needs.
        </p>
      </div>

      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>
              Copyright &copy; Your Website <span id="year"></span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
