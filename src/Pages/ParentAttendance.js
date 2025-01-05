import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import "./attendance.css";
import { useNavigate, useParams } from "react-router-dom";
import { getStudents } from "../API/Student";

const ParentAttendance = () => {
  // Sample data to simulate student information (you can replace this with dynamic data later)
  const [students, setStudents] = useState([]);

  const { parentId } = useParams();
  const navigate = useNavigate();

  // Fetch student data (mocking here)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudents();
        const filteredStudents = data.filter(
          (student) => student.parentId === parseInt(parentId)
        );
        setStudents(filteredStudents); // Set the students data in state
      } catch (err) {
        throw err.response?.data || "An error occurred while logging in";
      } finally {
      }
    };
    fetchData();
  }, [parentId]);

  // Define columns for Ant Design table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => `${record.first_name} ${record.last_name}`,
    },
    {
      title: "Roll No",
      dataIndex: "roll_number",
      key: "roll_number",
    },
    {
      title: "Attendance",
      key: "attendance",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleCourses(record?.id)}>
          View Attendance
        </Button>
      ),
    },
  ];

  const handleCourses = (id) => {
    console.log(id, "ID");
    navigate(`/courses/${id}/0`);
  };

  return (
    <div className="attendance-page">
      <header className="page-header">
        <h1>Parent Portal - Student Attendance</h1>
      </header>

      <div className="student-table-container">
        <Table
          columns={columns}
          dataSource={students.map((student) => ({
            ...student,
            key: student.id,
          }))}
          pagination={false}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default ParentAttendance;
