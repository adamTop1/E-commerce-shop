import React from 'react'
import Product from './Product'
import Checkout from './Checkout'

const Cart = () => {
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
            <Product />
            <Product />
            <Product />
            <Checkout />
		</div>
	)
}

export default Cart
