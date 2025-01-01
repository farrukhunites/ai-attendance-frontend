import React, { useState } from "react";
import { Table, Button, Modal, DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";
import "./viewAttendance.css";

const { Option } = Select;

const ViewAttendance = () => {
  const navigate = useNavigate();

  // Sample student details
  const student = {
    name: "John Doe",
    rollNumber: "1001",
  };

  // Sample attendance data
  const [attendanceData, setAttendanceData] = useState([
    { key: 1, date: "2025-01-01", status: "Present" },
    { key: 2, date: "2025-01-02", status: "Absent" },
  ]);

  // Modal visibility state
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({ date: null, status: "Present" });

  // Handle modal actions
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  const handleOk = () => {
    if (formData.date && formData.status) {
      const newRecord = {
        key: attendanceData.length + 1,
        date: formData.date.format("YYYY-MM-DD"),
        status: formData.status,
      };
      setAttendanceData([...attendanceData, newRecord]);
      setIsModalVisible(false);
      setFormData({ date: null, status: "Present" }); // Reset form
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Table columns
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className="view-attendance-container">
      <h1>View Attendance</h1>
      <div className="student-info">
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Roll Number:</strong> {student.rollNumber}
        </p>
      </div>

      <Table
        columns={columns}
        dataSource={attendanceData}
        pagination={false}
        style={{ marginBottom: "20px" }}
      />

      <div className="buttons">
        <Button type="default" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button type="primary" onClick={showModal}>
          Change Attendance
        </Button>
      </div>

      <Modal
        title="Change Attendance"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add"
      >
        <div className="modal-content">
          <DatePicker
            style={{ width: "100%", marginBottom: "10px" }}
            onChange={(date) => setFormData({ ...formData, date })}
          />
          <Select
            style={{ width: "100%" }}
            value={formData.status}
            onChange={(value) => setFormData({ ...formData, status: value })}
          >
            <Option value="Present">Present</Option>
            <Option value="Absent">Absent</Option>
            <Option value="Early Left">Early Left</Option>
            <Option value="Late">Late</Option>
          </Select>
        </div>
      </Modal>
    </div>
  );
};

export default ViewAttendance;
