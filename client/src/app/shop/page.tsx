'use client'

import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/product'
import ProductCard from '@/components/Main/shop/ProductCard'
import { productType } from '@/types/product'

const Shop = () => {
	const { data, isPending } = useQuery({
		queryFn: () => getProducts(),
		queryKey: ['products'],
	})

	if (isPending) return <div className='flex items-center justify-center text-4xl'>Loading...</div>

	return (
		<div className='grid gap-4 mx-6 grid-cols-2 xl:mx-10 my-10 min-[1200px]:grid-cols-3 min-[1600px]:grid-cols-4 max-md:flex max-md:flex-col'>
			{data?.data.map((product: productType) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	)
}

export default Shop
