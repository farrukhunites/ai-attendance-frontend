import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <div>
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
    </div>
  );
};

export default ContactUs;
