import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div className='flex justify-center w-full gap-5 h-1/6'>
				<Link href='/admin/add-product'>
					<Badge
						variant='outline'
						className='px-6 py-2 border-none cursor-pointer text-md hover:bg-gray-100 rounded-xl'>
						Add Product
					</Badge>
				</Link>
				<Link href='/admin/products'>
					<Badge
						variant='outline'
						className='px-6 py-2 border-none cursor-pointer text-md hover:bg-gray-100 rounded-xl'>
						Products
					</Badge>
				</Link>
				<Link href='/admin/sales'>
					<Badge
						variant='outline'
						className='px-6 py-2 border-none cursor-pointer text-md hover:bg-gray-100 rounded-xl'>
						Sales
					</Badge>
				</Link>
			</div>
			{children}
		</div>
	)
}

export default layout
