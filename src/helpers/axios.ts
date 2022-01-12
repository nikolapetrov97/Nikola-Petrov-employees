import axios from 'axios'
import { config } from '../config'

const token = window.sessionStorage.getItem('token')

const axiosInstance = axios.create({
  baseURL: config.BASEAPI,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
})

export default axiosInstance
