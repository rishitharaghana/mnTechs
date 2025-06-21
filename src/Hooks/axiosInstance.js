import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://d417-60-243-215-140.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export default ngrokAxiosInstance;