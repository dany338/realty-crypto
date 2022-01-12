import api from './api';
import { BACKEND_URL, USERS } from '../constants/backend';

export const getUserByCredentials = (login: any) => new Promise( async (resolve, reject) => {
  try {
    const params = login;
    const response = await api.get(`${BACKEND_URL}${USERS}`, { params });
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const createAccount = (data: any) => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(`${BACKEND_URL}${USERS}`, data);
    if (response.status === 201) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});