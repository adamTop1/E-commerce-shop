import React from 'react'
import QuantityInput from './QuantityInput'

export interface IcartItem {
	cartItemId: string
	name: string
	price: number
	quantity: number
}

const Product = ({ name, price, quantity, cartItemId }: IcartItem) => {
	const totalPrice = price * quantity

	return (
		<>
			<div className='grid grid-cols-2 my-8'>
				<div className='flex items-center gap-5'>
					{/* <Image src='/vegetables-main.svg' alt='vegetables' width={100} height={100} className='mr-8' /> */}
					<p className='text-xl'>{name}</p>
				</div>
				<div className='flex items-center justify-around '>
					<p>{price}$</p>
					<QuantityInput quantity={quantity} cartItemId={cartItemId} />
					<p>{totalPrice}$</p>
				</div>
			</div>
			<div className='my-4 border-b'></div>
		</>
	)
}

export default Product
