import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
});

// api
export const hotelAPI = {
  getAllRooms() {
    return instance.get<AxiosResponse>('rooms');
  },
};
