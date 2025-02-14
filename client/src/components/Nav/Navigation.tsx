'use client'

import { getCart } from '@/app/api/cart'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

const Navigation = () => {

	const {data} = useQuery({
		queryKey: ['cart'],
		queryFn: () => getCart(),
	})

	const itemsInCart = data?.data[0].items.length || 0

	return (
		<div className='flex items-center justify-between h-24 mx-16'>
			<h1 className='text-3xl font-medium text-green-600'><Link href='/'>FreshShop</Link></h1>
			<ul className='flex gap-20'>
				<li>
					<Link href='/shop' className='px-6 py-2'>
						Shop
					</Link>
				</li>
				<li>
					<Link href='/profile' className='px-6 py-2'>
						My profile
					</Link>
				</li>
				<li>
					<Link href='/cart' className='px-6 py-2 text-white bg-green-600 rounded'>
						Cart ({itemsInCart})
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
