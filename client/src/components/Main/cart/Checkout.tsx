import { getCart } from '@/app/api/cart'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Checkout = () => {
	const { data: response } = useQuery({
		queryKey: ['cart'],
		queryFn: () => getCart(),
	})

	const cartItemsArr = response?.data[0].items

	let subTotalPrice = 0

	cartItemsArr?.map(
		(item: { product: { price: number }, quantity: number }) =>
			(subTotalPrice += item.product.price * item.quantity)
	)

	const totalPrice = (subTotalPrice + 9.99).toFixed(2)

	return (
		<div className='grid grid-cols-2 my-32'>
			<div className='flex items-start justify-center'>
				<Button className='px-8 py-5 uppercase bg-green-600 hover:bg-green-700'>check</Button>
				<Input placeholder='Enter your coupon code' className='w-1/3 mx-5 ' />
			</div>

			<div className='flex flex-col justify-center w-1/2 gap-3 mx-auto'>
				<div className='flex justify-between gap-6'>
					<p>Subtotal</p>
					<p>{subTotalPrice}$</p>
				</div>
				<div className='flex justify-between gap-6'>
					<p>Shipping cost</p>
					<p>9.99$</p>
				</div>
				<div className='flex justify-between gap-6'>
					<p>Coupon</p>
					<p>0$</p>
				</div>

				<div className='h-[1px] bg-gray-500'></div>

				<div className='flex justify-between gap-6 text-xl font-bold uppercase '>
					<p>total</p>
					<p>{totalPrice}$</p>
				</div>

				<Button className='px-8 py-5 mx-auto mt-5 uppercase bg-green-600 hover:bg-green-700'>checkout</Button>
			</div>
		</div>
	)
}

export default Checkout
