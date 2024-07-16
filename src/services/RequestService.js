import axios from 'axios';

const API_URL = 'http://localhost:8080/api/requests';

const getRequests = () => {
  return axios.get(API_URL);
};

const addRequest = (request) => {
  return axios.post(API_URL, request);
};

const getRequest = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const updateRequest = (id, request) => {
  return axios.put(`${API_URL}/${id}`, request);
};

export default {
  getRequests,
  addRequest,
  getRequest,
  updateRequest,
};
