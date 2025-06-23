import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://9946-2401-4900-674b-3d77-716b-155e-7798-3209.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

export default ngrokAxiosInstance;