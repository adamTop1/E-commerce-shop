import api from './axiosApi'

export const getUsers = async () => {
	return await api.get('/auth')
}

export const createUser = async ({ email, password }: { email: string; password: string }) => {
	return await api.post('/auth/create', { email, password })
}

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
	const user = await api.post('/auth/login', { email, password })
	localStorage.setItem('accessToken', user.data.accessToken)
	return
}