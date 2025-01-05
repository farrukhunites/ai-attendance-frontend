import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import "./attendance.css";
import { useNavigate } from "react-router-dom";
import { getStudents } from "../API/Student";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch student data (mocking here)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getStudents();
        console.log(data);
        setStudents(data); // Set the students data in state
      } catch (err) {
        throw err.response?.data || "An error occurred while logging in";
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCourses = (id) => {
    navigate(`/courses/${id}/1`);
  };

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(students)) {
    return <div>{students}</div>;
  }

  return (
    <div className="attendance-page">
      <header className="page-header">
        <h1>Student Attendance Information</h1>
      </header>

      <div className="student-table-container">
        <Table
          columns={columns}
          dataSource={students?.map((student) => ({
            ...student,
            key: student.id,
          }))}
          pagination={false} // Disable pagination (optional, can be enabled as needed)
          scroll={{ x: true }} // Ensure the table is responsive and takes full width
        />
      </div>
    </div>
  );
};

export default Attendance;
