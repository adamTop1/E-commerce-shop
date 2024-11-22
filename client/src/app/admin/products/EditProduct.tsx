import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productType } from '@/types/product'
import { updateProduct } from '@/app/api/product'

const EditProduct = ({ id, name, price, stock }: productType) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationFn: ({ id, name, price, stock }: productType) => updateProduct({ id, name, price, stock }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] })
		},
	})

	const formSchema = z.object({
		name: z.string().min(2, {
			message: 'Username must be at least 2 characters.',
		}),
		price: z.string().min(1, {
			message: 'Price must be at least 1.',
		}),
		stock: z.string(),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: name,
			price: price.toString(),
			stock: stock.toString(),
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const priceToNumber = parseFloat(values.price)
		const stockToNumber = parseFloat(values.stock)
		mutate({ id: id, name: values.name, price: priceToNumber, stock: stockToNumber })
	}

	return (
		<Dialog>
			<DialogTrigger className='w-full px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100'>
				Edit
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Edit Product</DialogTitle>
					<DialogDescription>Make changes to product. Click save when you are done.</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='price'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input {...field} type='number' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='stock'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Stock</FormLabel>
									<FormControl>
										<Input {...field} type='number' />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
							<div className='flex justify-end mt-4'><DialogClose type='submit' className='px-2 py-1 duration-500 border rounded hover:bg-gray-200'>Save changes</DialogClose></div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default EditProduct
