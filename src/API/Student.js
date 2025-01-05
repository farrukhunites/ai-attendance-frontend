import axios from "axios";

// Function to fetch students from the API
const getStudents = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/students/`
    );
    return response.data; // Return the list of students
  } catch (error) {
    throw error.response?.data || "An error occurred while fetching students.";
  }
};

const getStudent = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/student/${id}/`
    );
    return response.data; // Return the list of students
  } catch (error) {
    throw error.response?.data || "An error occurred while fetching students.";
  }
};

export { getStudents, getStudent };
