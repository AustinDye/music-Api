import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.musixmatch.com/ws/1.1/',
  timeout: 8000
})
