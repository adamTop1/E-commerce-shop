'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
// import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { cartItemType, productType } from '@/types/product'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { addToCart } from '@/app/api/cart'

const ProductCard = ({ name, price, id }: productType) => {
	const { mutate } = useMutation({
		mutationFn: ({ productId, quantity }: cartItemType) => addToCart({ productId, quantity }),
	})

	const addToCartHandler = () => {
		mutate({ productId: id!, quantity: 1 })
	}

	return (
		<Card className='overflow-hidden'>
			<div className='flex items-center justify-center rounded bg-slate-50'>
				{/* <Image src={image} alt='vegetables' width={300} height={300} /> */}
			</div>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p className='font-bold'>{price}$ / kg</p>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<div className='flex items-center gap-1'>
					<Input type='number' placeholder='1' className='w-1/4' />
					<p>kg</p>
				</div>
				<Button onClick={addToCartHandler}>Add to cart</Button>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
