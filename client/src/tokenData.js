export const token =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : "";