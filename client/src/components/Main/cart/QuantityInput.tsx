'use client'

import { updateCartItem } from '@/app/api/cart'
import { Input } from '@/components/ui/input'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const QuantityInput = ({ quantity, cartItemId }: { quantity: number; cartItemId: string }) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationFn: ({ quantity, cartItemId }: { quantity: number; cartItemId: string }) =>
			updateCartItem({ quantity, cartItemId }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
	})

	const changeQuantityHandler = (value: string) => {
		if (value) mutate({ quantity: parseInt(value), cartItemId })
	}

	return (
		<div className='w-20'>
			<Input type='number' defaultValue={quantity} onBlur={e => changeQuantityHandler(e.target.value)} min={1} />
		</div>
	)
}

export default QuantityInput
