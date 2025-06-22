import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://b247-45-112-30-210.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

export default ngrokAxiosInstance;