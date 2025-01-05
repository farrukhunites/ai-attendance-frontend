import axios from "axios";

const getStudentAttendance = async (courseId, studentId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/attendance/${courseId}/${studentId}/`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "An error occurred while fetching attendance";
  }
};

const markAttendance = async (studentId, courseId, date, status) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/attendance/mark/`,
      {
        student_id: studentId,
        course_id: courseId,
        date: date,
        status: status,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "An error occurred while marking attendance";
  }
};

const deleteAttendance = async (attendanceId) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/attendance/${attendanceId}/`
    );
  } catch (error) {
    throw (
      error.response?.data || "An error occurred while deleting attendance."
    );
  }
};

export { getStudentAttendance, markAttendance, deleteAttendance };
