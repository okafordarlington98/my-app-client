import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/events";

export const getEvents = () => axios.get(API_BASE_URL);
export const getEvent = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createEvent = (data) => axios.post(API_BASE_URL, data);
export const updateEvent = (id, data) => axios.put(`${API_BASE_URL}/${id}`, data);
export const deleteEvent = (id) => axios.delete(`${API_BASE_URL}/${id}`);