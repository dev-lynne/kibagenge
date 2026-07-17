import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export interface JoinChamaPayload {
  invite_code: string
}

export const joinChama = (payload: JoinChamaPayload) => {
  const token = localStorage.getItem('access_token')
  return api.post('/chama/join', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
