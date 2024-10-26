import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<h1 className='text-6xl font-bold text-gray-800'>404</h1>
			<p className='mb-4 text-xl text-gray-600'>Oops! Page not found 😕</p>
			<p className='mb-8 text-center text-gray-500'>It seems the page you are looking for doesn’t exist.</p>
			<Link
				href='/'
				className='px-6 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600'>
				Go Home
			</Link>
		</div>
	)
}
