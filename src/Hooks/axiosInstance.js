import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://67bc-110-235-236-208.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export default ngrokAxiosInstance;