import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export interface ChamaCreatePayload {
  name: string
  description?: string
  contribution_amount: number
  currency: string
  contribution_frequency: string
  cycle_start_date: string
  max_members: number
  rotation_method: string
}

export const createChama = (payload: ChamaCreatePayload) => {
  const token = localStorage.getItem('access_token')
  return api.post('/chama/create', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
