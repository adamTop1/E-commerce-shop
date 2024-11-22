'use client'

import { getProducts } from '@/app/api/product'
import { useQuery } from '@tanstack/react-query'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreVertical } from 'lucide-react'
import { productType } from '@/types/product'
import EditProduct from './EditProduct'

export default function DemoPage() {
	const {
		data: response,
		isSuccess,
		isPending,
	} = useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts(),
	})

	if (isPending) return <div className='flex items-center justify-center min-h-screen text-4xl'>Loading...</div>

	if (isSuccess) {
		return (
			<div className='w-7/12 mx-auto mt-20 '>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Product</TableHead>
							<TableHead>Price</TableHead>
							<TableHead>Stock</TableHead>
							<TableHead className='w-0'>
								<span className='sr-only'>Actions</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{response.data.map((product: productType) => {
							return (
								<TableRow key={product.id}>
									<TableCell>{product.name}</TableCell>
									<TableCell>{product.price}</TableCell>
									<TableCell>{product.stock}</TableCell>
									<TableCell className='text-center'>
										<DropdownMenu>
											<DropdownMenuTrigger>
												<MoreVertical className='w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800' />
											</DropdownMenuTrigger>
											<DropdownMenuContent className='py-1 mt-2 bg-white border border-gray-200 rounded-md shadow-lg'>
												<EditProduct id={product.id} name={product.name} price={product.price} stock={product.stock} />
												<DropdownMenuItem className='px-4 py-2 text-sm text-red-800 cursor-pointer hover:bg-red-100'>
													Delete Item
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</div>
		)
	}
}
