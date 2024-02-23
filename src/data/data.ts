import axios from "axios";

const base_url = `http://enl.centralindia.cloudapp.azure.com/assignment`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleGFtcGxlSW5zdXJlciIsInN1YiI6ImpvaG4uZG9lIiwiaWF0IjoxNjQ4NDkzNjI5LCJleHAiOjE2NDg0OTYyMjl9.4gnCo5F-2H34ziV31Q2tKuI46wvGqazMwEms7qUxKMo`;
const config = {
  headers: {
    Authorization: token,
    "Content-Type": "application/json",
  },
};

export const getDashboardNumber = async () => {
  const resp = await axios.get(`${base_url}/dashboard/dashboardNumber`, config);
  return resp;
};

export const getMenuData = async () => {
  const resp = await axios.get(`${base_url}/sidebarMenu/menuItems`, config);
  return resp;
};

export const getAllUsers = async () => {
  const resp = await axios.get(`${base_url}/user/userInfo/allUsers`, config);
  return resp;
};

export const getUserDetails = async (userId: number) => {
  const resp = await axios.get(`${base_url}/user/userInfo/${userId}`, config);
  return resp;
};
