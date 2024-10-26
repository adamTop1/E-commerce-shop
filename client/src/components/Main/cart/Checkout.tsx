import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Checkout = () => {
	return (
		<div className='grid grid-cols-2 my-32'>
			<div className='flex items-start justify-center'>
				<Button className='px-8 py-5 uppercase bg-green-600 hover:bg-green-700'>check</Button>
				<Input  placeholder='Enter your coupon code' className='w-1/3 mx-5 ' />
			</div>

			<div className='flex flex-col justify-center w-1/2 gap-3 mx-auto'>
				<div className='flex justify-between gap-6'>
					<p>Subtotal</p>
					<p>50.84$</p>
				</div>
				<div className='flex justify-between gap-6'>
					<p>Shipping cost</p>
					<p>50.84$</p>
				</div>
				<div className='flex justify-between gap-6'>
					<p>Coupon</p>
					<p>50.84$</p>
				</div>

				<div className='h-[1px] bg-gray-500'></div>

				<div className='flex justify-between gap-6 text-xl font-bold uppercase '>
					<p>total</p>
					<p>520.84$</p>
				</div>

				<Button className='px-8 py-5 mx-auto mt-5 uppercase bg-green-600 hover:bg-green-700'>checkout</Button>
			</div>
		</div>
	)
}

export default Checkout
