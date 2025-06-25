import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://09bb-110-235-236-190.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

export default ngrokAxiosInstance;