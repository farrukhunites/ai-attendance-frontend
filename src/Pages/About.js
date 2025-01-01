import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          border: "1px solid #000",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
        className="container mt-5"
      >
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
    </div>
  );
};

export default About;
