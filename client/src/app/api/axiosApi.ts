'use client'

import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://localhost:3001',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

api.interceptors.request.use(
	request => {
		const accessToken = localStorage.getItem('accessToken')
		if ( !accessToken) return request
		if (accessToken) {
			request.headers['Authorization'] = `Bearer ${accessToken}`
		}
		return request
	},
	error => {
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config
		if (error?.response?.status === 403 && !originalRequest?.sent) {
			originalRequest.sent = true
			const accessToken = await api.post('/token')
			localStorage.setItem('accessToken', accessToken.data.accessToken)
			originalRequest.headers['Authorization'] = `Bearer ${accessToken.data.token}`
			return api(originalRequest)
		}
		return Promise.reject(error)
	}
)

export default api


