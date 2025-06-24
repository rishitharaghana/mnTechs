import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://6432-2409-40f0-119a-8401-5c1f-a1bc-5a11-de0a.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

export default ngrokAxiosInstance;