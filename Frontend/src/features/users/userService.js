import axios from "axios";

export const regUser = async (data) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/register-user",
    data
  );

  // Save the user into local storage
  if (response.data) {
    localStorage.setItem("myUser", JSON.stringify(response.data));
  }

  return response.data;
};
export const logUser = async (data) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/login-user",
    data
  );

  // Save the user into local storage
  if (response.data) {
    localStorage.setItem("myUser", JSON.stringify(response.data));
  }

  return response.data;
};
