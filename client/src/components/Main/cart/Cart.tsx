import React from 'react'
import Product from './Product'

const Cart = () => {
	return (
		<div className='max-w-[1800px] mx-auto my-20 px-20 uppercase'>
			<div className='grid grid-cols-2'>
				<p>product</p>
				<div className='flex justify-around'>
					<p>price</p>
					<p>quantity</p>
					<p>total</p>
				</div>
			</div>
			<div className='my-4 border-b'></div>
            <Product />
            <Product />
            <Product />
		</div>
	)
}

export default Cart
