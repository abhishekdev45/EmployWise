import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

export const login = (email, password) =>
  api.post("/login", { email, password });
export const fetchUsers = (page) => api.get(`/users?page=${page}`);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);
