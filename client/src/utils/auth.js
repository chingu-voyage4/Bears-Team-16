import axios from "axios";

// const jwtToken = window.localStorage.getItem(`recipes`);

export default axios.create({
  baseURL: `http://localhost:4000/`,
  timeout: 2000,
  // headers: { Authorization: jwtToken },
});
