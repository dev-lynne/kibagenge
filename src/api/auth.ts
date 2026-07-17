import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export interface RegisterPayload {
  full_name: string
  phone?: string
  email: string
  password: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface TokenResponse {
  access_token: string
  refresh_token: string
  token_type: string
  full_name: string
}

export const registerUser = (payload: RegisterPayload) => api.post('/auth/register', payload)
export const loginUser = (payload: LoginPayload) => api.post<TokenResponse>('/auth/login', payload)
export const refreshToken = (refreshToken: string) => api.post<TokenResponse>('/auth/refresh', { refresh_token: refreshToken })
export const verifyCode = (payload: { user_id: string; code: string; type: string }) => api.post('/auth/verify', payload)
export const requestPasswordReset = (email: string) => api.post('/auth/password-reset/request', { email })
export const confirmPasswordReset = (payload: { token: string; new_password: string }) => api.post('/auth/password-reset/confirm', payload)
