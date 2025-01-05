import axios from "axios";

const adminLogin = async (username, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/adminlogin/login/`,
      {
        username,
        password,
      }
    );
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data || "An error occurred while logging in";
  }
};

const parentLogin = async (email, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/parentlogin/login/`,
      {
        email,
        password,
      }
    );
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data || "An error occurred while logging in";
  }
};

export { adminLogin, parentLogin };
