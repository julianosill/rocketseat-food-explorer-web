import axios from 'axios'

const URL = 'http://localhost'
const PORT = '3333'

export const api = axios.create({
  baseURL: `${URL}:${PORT}`,
})

export const imageUrl = `${URL}:${PORT}/files`
