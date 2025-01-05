import axios from "axios";

const getStudentCourses = async (studentId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/courses/student/${studentId}/`
    );
    return response.data; // Return the courses data
  } catch (error) {
    throw error.response?.data || "An error occurred while fetching courses";
  }
};

export { getStudentCourses };
