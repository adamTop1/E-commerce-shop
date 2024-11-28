import api from './axiosApi'

export const getUser = async () => {
	return await api.get('/user').then(res => res.data)
}
