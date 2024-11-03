import LoginForm from '@/components/login/LoginForm'
import React from 'react'

const page = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<h3 className='mt-10 mb-16 text-4xl'>Login</h3>
			<LoginForm />
		</div>
	)
}

export default page
