import axios from 'axios';

const baseURL = 'http://localhost:3005';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        console.log(error.response);
      
        return Promise.reject(error);
    }
);

export default axiosInstance;