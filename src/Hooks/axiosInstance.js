import axios from 'axios';


const ngrokAxiosInstance = axios.create({
  baseURL: 'https://api.mntechs.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ngrokAxiosInstance;