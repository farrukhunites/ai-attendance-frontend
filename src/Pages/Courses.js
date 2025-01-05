import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./courses.css";
import { getStudentCourses } from "../API/Course";

const Courses = () => {
  const { studentId, admin } = useParams();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudentCourses(studentId);
        setCourses(data);
      } catch (err) {
        throw err.response?.data || "An error occurred while logging in";
      } finally {
      }
    };
    fetchData();
  }, [studentId]);

  return (
    <div className="courses-container">
      <h1>Classes and Attendance</h1>
      <Row gutter={[16, 16]}>
        {courses?.map((course) => (
          <Col key={course?.id} xs={24} sm={12} lg={8}>
            <Card
              title={course?.name}
              hoverable
              onClick={() =>
                navigate(`/view-attendance/${course?.id}/${studentId}/${admin}`)
              }
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
                <strong>{course?.code}</strong>
              </p>
              <p>
                Credits: {course?.credits} Active Class <br />
                Semester: {course?.semester}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
