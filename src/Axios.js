import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  headers: {'Access-Control-Allow-Origin': '*'}
})

export default axiosInstance
