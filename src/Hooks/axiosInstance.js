import axios from 'axios';


// const ngrokAxiosInstance = axios.create({
//   baseURL: 'https://26cf-110-235-236-151.ngrok-free.app',
//   headers: {
//     'Content-Type': 'application/json',
//     'ngrok-skip-browser-warning': '69420',
//   },
// });
const ngrokAxiosInstance = axios.create({
  baseURL: 'https://api.mntechs.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ngrokAxiosInstance;