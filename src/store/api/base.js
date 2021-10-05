import axios from 'axios';

const REQUEST_TIMEOUT = 30000;

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: REQUEST_TIMEOUT,
});

export const setAccessToken = (t) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${t}`;
  axiosClient.defaults.headers.common['X-CSRF-TOKEN'] = t;
};

export default axiosClient;
