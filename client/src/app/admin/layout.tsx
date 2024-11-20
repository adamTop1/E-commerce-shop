import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: {children: React.ReactNode}) => {
	return (
		<div>
			<div className='flex justify-center w-full gap-5 h-1/6'>
				<Badge variant='outline' className='px-6 py-2 border-none cursor-pointer text-md hover:bg-gray-100 rounded-xl'>
					<Link href='/admin/add-product'>Add Product</Link>
				</Badge>
				<Badge variant='outline' className='px-6 py-2 border-none cursor-pointer text-md hover:bg-gray-100 rounded-xl'>
					Products
				</Badge>
				<Badge variant='outline' className='px-6 py-2 border-none cursor-pointer text-md hover:bg-gray-100 rounded-xl'>
					Sales
				</Badge>
			</div>
			{children}
		</div>
	)
}

export default layout
