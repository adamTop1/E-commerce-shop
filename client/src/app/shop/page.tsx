import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Shop = () => {
	return (
		<div className='grid grid-cols-4 gap-8 mx-28 my-28'>
			<Card className='overflow-hidden'>
				<div className='flex items-center justify-center rounded bg-slate-50'>
					<Image src='/vegetables-main.svg' alt='vegetables' width={300} height={300} />
				</div>
				<CardHeader>
					<CardTitle>Tomato</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
				<p className='font-bold'>4.99$ / kg</p>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<div className='flex items-center gap-1'>
						<Input type='number' placeholder='1' className='w-1/4' />
						<p>kg</p>
					</div>
					<Button>Add to cart</Button>
				</CardFooter>
			</Card>
			<Card className='overflow-hidden'>
				<div className='flex items-center justify-center rounded bg-slate-50'>
					<Image src='/vegetables-main.svg' alt='vegetables' width={300} height={300} />
				</div>
				<CardHeader>
					<CardTitle>Tomato</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
				<p className='font-bold'>4.99$ / kg</p>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<div className='flex items-center gap-1'>
						<Input type='number' placeholder='1' className='w-1/4' />
						<p>kg</p>
					</div>
					<Button>Add to cart</Button>
				</CardFooter>
			</Card>
			<Card className='overflow-hidden'>
				<div className='flex items-center justify-center rounded bg-slate-50'>
					<Image src='/vegetables-main.svg' alt='vegetables' width={300} height={300} />
				</div>
				<CardHeader>
					<CardTitle>Tomato</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
				<p className='font-bold'>4.99$ / kg</p>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<div className='flex items-center gap-1'>
						<Input type='number' placeholder='1' className='w-1/4' />
						<p>kg</p>
					</div>
					<Button>Add to cart</Button>
				</CardFooter>
			</Card>
			<Card className='overflow-hidden'>
				<div className='flex items-center justify-center rounded bg-slate-50'>
					<Image src='/vegetables-main.svg' alt='vegetables' width={300} height={300} />
				</div>
				<CardHeader>
					<CardTitle>Tomato</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p className='font-bold'>4.99$ / kg</p>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<div className='flex items-center gap-1'>
						<Input type='number' placeholder='1' className='w-1/4' />
						<p>kg</p>
					</div>
					<Button>Add to cart</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export default Shop
