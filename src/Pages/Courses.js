import React from "react";
import { Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "./courses.css";

const Courses = () => {
  const navigate = useNavigate();

  // Sample courses data
  const courses = [
    {
      id: "CSCS2543",
      title: "Parallel and Distributed Computing",
      credits: 3.0,
      attendance: "72.0%",
      semester: "Fall 2024",
    },
    {
      id: "CSGE4963",
      title: "Professional Practices",
      credits: 3.0,
      attendance: "89.0%",
      semester: "Fall 2024",
    },
    {
      id: "CSHU3873",
      title: "Speak Well - English Conversation",
      credits: 3.0,
      attendance: "81.0%",
      semester: "Fall 2024",
    },
    {
      id: "CSSE4193",
      title: "Software Testing",
      credits: 3.0,
      attendance: "53.0%",
      semester: "Fall 2024",
    },
    {
      id: "CSNC4403",
      title: "Introduction to Cryptography",
      credits: 3.0,
      attendance: "56.0%",
      semester: "Fall 2024",
    },
    {
      id: "CSSE4183",
      title: "Final Year Project 2",
      credits: 3.0,
      attendance: "100.0%",
      semester: "Fall 2024",
    },
  ];

  return (
    <div className="courses-container">
      <h1>Classes, Grades, and Attendance</h1>
      <Row gutter={[16, 16]}>
        {courses.map((course) => (
          <Col key={course.id} xs={24} sm={12} lg={8}>
            <Card
              title={course.title}
              hoverable
              onClick={() => navigate(`/view-attendance/${course.id}`)}
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                textAlign: "center",
              }}
              headStyle={{
                backgroundColor: "#002766",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              <p>
                <strong>{course.id}</strong>
              </p>
              <p>
                Credits: {course.credits} Active Class <br />
                Attendance: {course.attendance} {course.semester}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
