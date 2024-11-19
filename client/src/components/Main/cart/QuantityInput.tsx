'use client'

import { Input } from '@/components/ui/input'

const QuantityInput = ({ quantity }: { quantity: number }) => {

	return (
		<div>
			<Input type='number' defaultValue={quantity} />
		</div>
	)
}

export default QuantityInput
