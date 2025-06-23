import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://1277-110-235-236-221.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export default ngrokAxiosInstance;