import api from './axiosApi'

export const getUser = async () => {
	return await api.get('/user').then(res => res.data)
}

export const getUserById = async ({ id }: { id: string }) => {
	return await api.get('/userId', { data: id }).then(res => res.data)
}
