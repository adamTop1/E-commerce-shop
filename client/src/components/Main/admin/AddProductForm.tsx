'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { addProduct } from '@/api/product'
import { productType } from '@/types/product'

const AddProductForm = () => {
	const { mutate, isPending } = useMutation({
		mutationFn: ({ name, price, image }: productType) => addProduct({ name, price, image }),
	})

	const formSchema = z.object({
		name: z.string().min(2, {
			message: 'Name must be at least 2 characters.',
		}),
		price: z.string(),
		image: z.string(),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			price: '',
			image: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
        const priceToNumber = parseFloat(values.price)
		mutate({ name: values.name, price: priceToNumber, image: values.image })
	}

	if (isPending) {
		return <div>Loading...</div>
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='Tomato...' {...field} />
							</FormControl>
							<FormDescription>What do you want to add?</FormDescription>
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
								<Input placeholder='2.99...' {...field} type='number' />
							</FormControl>
							<FormDescription>What is the price per kg?</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='image'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image URL</FormLabel>
							<FormControl>
								<Input placeholder='img url...' {...field} />
							</FormControl>
							<FormDescription>Type here URL image of the product.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}

export default AddProductForm
