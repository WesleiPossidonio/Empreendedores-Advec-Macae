import axios, { type InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://api-realize.vercel.app/',
})

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const userData = localStorage.getItem(
    'advecEmpreendedores:advecEmpreendedores1.0',
  )
  const token = userData !== null && JSON.parse(userData).token

  if (token === true) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
