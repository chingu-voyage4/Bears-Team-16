import axios from "axios";

// const jwtToken = window.localStorage.getItem(`recipes`);
export const baseURL = `https://bearecipes.herokuapp.com`;

export default axios.create({
  baseURL,
  timeout: 5000,
  // headers: { Authorization: jwtToken },
});
