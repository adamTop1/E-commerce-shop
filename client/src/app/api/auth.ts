import api from './axiosApi'

export const createUser = async ({ email, password }: { email: string; password: string }) => {
	return await api.post('/auth/register', { email, password })
}

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
	const user = await api.post('/auth/login', { email, password })
	localStorage.setItem('accessToken', user.data.accessToken)
	return
}
