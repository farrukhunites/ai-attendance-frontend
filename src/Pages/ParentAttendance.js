import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import "./attendance.css";

const ParentAttendance = () => {
  // Sample data to simulate student information (you can replace this with dynamic data later)
  const [students, setStudents] = useState([]);

  // Fetch student data (mocking here)
  useEffect(() => {
    // Simulating API call
    const fetchedStudents = [
      { id: 1, first_name: "John", last_name: "Doe", roll_number: "1001" },
    ];
    setStudents(fetchedStudents);
  }, []);

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
        <Button type="primary" href={`/courses`}>
          View Attendance
        </Button>
      ),
    },
  ];

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
