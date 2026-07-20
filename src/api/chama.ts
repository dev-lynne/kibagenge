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

export interface ChamaSummary {
  id: string
  name: string
  invite_code: string
  role: string
  status: string
}

export interface PendingRequest {
  membership_id: string
  user_id: string
  user_name: string
  role: string
  status: string
}

export const createChama = (payload: ChamaCreatePayload) => {
  const token = localStorage.getItem('access_token')
  return api.post('/chama/create', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getMyChamas = () => {
  const token = localStorage.getItem('access_token')
  return api.get<{ chamas: ChamaSummary[] }>('/chama/my', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const getPendingRequests = () => {
  const token = localStorage.getItem('access_token')
  return api.get<{ requests: PendingRequest[] }>('/chama/pending-requests', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const reviewJoinRequest = (payload: { membership_id: string; action: string }) => {
  const token = localStorage.getItem('access_token')
  return api.post('/chama/review-request', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
