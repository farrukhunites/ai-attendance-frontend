import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
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
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need further information, please feel
          free to reach out to us. Our team is here to assist you!
        </p>

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Head Office</h5>
            <p className="card-text">
              <strong>Address:</strong> 1234 Innovation Way, Tech City, TX 56789
            </p>
            <p className="card-text">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="card-text">
              <strong>Email:</strong> support@aiattendancesystem.com
            </p>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Support</h5>
            <p className="card-text">
              <strong>Phone:</strong> (987) 654-3210
            </p>
            <p className="card-text">
              <strong>Email:</strong> help@aiattendancesystem.com
            </p>
          </div>
        </div>
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

export default ContactUs;
