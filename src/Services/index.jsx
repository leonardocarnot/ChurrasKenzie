import axios from 'axios'
const api = axios.create({
    baseURL: "https://churrasapi.herokuapp.com",
    timeout: 15000,
})
export default api;