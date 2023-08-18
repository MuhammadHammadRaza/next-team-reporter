import axios from "axios";

const instanceOfAxios = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    withCredentials: true
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default instanceOfAxios