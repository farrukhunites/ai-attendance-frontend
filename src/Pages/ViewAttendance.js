import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  DatePicker,
  Select,
  message,
  Popconfirm,
} from "antd";
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
  const { courseId, studentId, admin } = useParams();
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
        console.error("Attendance Fetch Error:", err);
      }

      try {
        const studentData = await getStudent(studentId);

        setStudent(studentData);
      } catch (err) {
        console.error("Student Fetch Error:", err);
      }
    };
    fetchData();
  }, [courseId, studentId]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [formData, setFormData] = useState({ date: null, status: "Present" });

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
        setAttendanceData([...attendanceData, newAttendance]);
        setIsModalVisible(false);
        setFormData({ date: null, status: "Present" });
      } catch (err) {
        console.error("Mark Attendance Error:", err);
        message.error("Attendance Exists for this Date");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDelete = async (attendanceId) => {
    try {
      await deleteAttendance(attendanceId);
      setAttendanceData(
        attendanceData.filter((item) => item.id !== attendanceId)
      );
      message.success("Attendance deleted successfully!");
    } catch (err) {
      console.error("Delete Attendance Error:", err);

      message.error("Failed to delete attendance.");
    }
  };

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
              <Popconfirm
                title="Are you sure you want to delete this record?"
                onConfirm={() => handleDelete(record?.id)} // Handle deletion
                okText="Yes"
                cancelText="No"
              >
                <Button color="danger" variant="filled">
                  Delete
                </Button>
              </Popconfirm>
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
