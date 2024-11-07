'use client'
import axios from 'axios'

export const getUsers = async () => {
	return await axios.get('http://localhost:3001/auth')
}

export const createUser = async ({ email, password }: { email: string; password: string }) => {
	return await axios.post('http://localhost:3001/auth/create', { email, password })
}

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
	const user = await axios.post('http://localhost:3001/auth/login', { email, password })
	localStorage.setItem('accessToken', user.data.token)
	return
}