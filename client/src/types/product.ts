export interface productType {
	id?: string
	name: string
	price: number
	image?: string
	description?: string
	stock: number
}

export interface cartItemType {
	productId: string,
	quantity: number,
	name?: string,
	price?: number,
}