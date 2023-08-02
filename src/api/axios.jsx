import axios from 'axios';

export const ajax = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// An axios default setting.
