'use client'

import React from 'react'
import Product from './Product'
import Checkout from './Checkout'
import { getCart } from '@/app/api/cart'
import { useQuery } from '@tanstack/react-query'

const Cart = () => {
	const { data: response } = useQuery({
		queryKey: ['cart'],
		queryFn: () => getCart(),
	})

	const cartItemsArr = response?.data[0].items

	return (
		<div className='max-w-[1800px] mx-auto my-20 px-20 '>
			<div className='grid grid-cols-2 uppercase'>
				<p>product</p>
				<div className='flex justify-around'>
					<p>price</p>
					<p>quantity</p>
					<p>total</p>
				</div>
			</div>
			<div className='my-4 border-b'></div>
			{cartItemsArr?.map((item) => (
				<Product key={item.productId} name={item.product.name} price={item.product.price} quantity={item.quantity} />
			))}
			
			<Checkout />
		</div>
	)
}

export default Cart
