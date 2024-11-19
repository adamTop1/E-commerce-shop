'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUser } from '../api/user'

const ProfilePage = () => {
	const { data: user, isPending} = useQuery({
		queryFn: () => getUser(),
		queryKey: ['user'],
	})


  if (user == null || isPending) {
    return <h1>Loading</h1>
  }

	return (
		<>
			<h1>Profile info</h1>
			<p>email: {user.email}</p>
			<p>role: {user.role}</p>
			<p>account created at: {user.createdAt}</p>
		</>
	)
}

export default ProfilePage
