import React, { useEffect, useState } from "react";
import { Table, Button, Modal, DatePicker, Select, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./viewAttendance.css";
import {
  deleteAttendance,
  getStudentAttendance,
  markAttendance,
} from "../API/Attendance";
import { getStudent } from "../API/Student";

const { Option } = Select;

const ViewAttendance = () => {
  const { courseId, studentId, admin } = useParams(); // Get courseId and studentId from the URL
  const [attendanceData, setAttendanceData] = useState([]);
  const [student, setStudent] = useState({});

  const navigate = useNavigate();

  let flag = true;

  if (admin === "0") {
    flag = false;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudentAttendance(courseId, studentId);
        setAttendanceData(data);
      } catch (err) {
        console.error("Attendance Fetch Error:", err); // Log specific error
      }

      try {
        const studentData = await getStudent(studentId);

        setStudent(studentData);
      } catch (err) {
        console.error("Student Fetch Error:", err); // Log specific error
      }
    };
    fetchData();
  }, [courseId, studentId]);

  // Modal visibility state
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({ date: null, status: "Present" });

  // Handle modal actions
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  const handleOk = async () => {
    if (formData.date && formData.status) {
      try {
        const newAttendance = await markAttendance(
          studentId,
          courseId,
          formData.date.format("YYYY-MM-DD"),
          formData.status
        );
        setAttendanceData([...attendanceData, newAttendance]); // Update the attendance data
        setIsModalVisible(false);
        setFormData({ date: null, status: "Present" }); // Reset form
      } catch (err) {
        console.error("Mark Attendance Error:", err); // Log specific error
        message.error("Attendance Exists for this Date");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle attendance deletion
  const handleDelete = async (attendanceId) => {
    try {
      await deleteAttendance(attendanceId); // Call the API to delete the attendance
      setAttendanceData(
        attendanceData.filter((item) => item.id !== attendanceId)
      ); // Remove the deleted attendance from the state
      message.success("Attendance deleted successfully!");
    } catch (err) {
      console.error("Delete Attendance Error:", err);

      message.error("Failed to delete attendance.");
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
    ...(flag
      ? [
          {
            title: "Action",
            key: "action",
            render: (text, record) => (
              <Button
                color="danger"
                variant="filled"
                onClick={() => handleDelete(record?.id)} // Handle deletion
              >
                Delete
              </Button>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="view-attendance-container">
      <h1>View Attendance</h1>
      <div className="student-info">
        <p>
          <strong>Name:</strong> {student?.first_name} {student?.last_name}
        </p>
        <p>
          <strong>Roll Number:</strong> {student.roll_number}
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
        {flag ? (
          <Button type="primary" onClick={showModal}>
            Change Attendance
          </Button>
        ) : (
          <></>
        )}
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
