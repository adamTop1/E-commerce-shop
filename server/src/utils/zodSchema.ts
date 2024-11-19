import z from 'zod'

export const userRegistrationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20)
})

export const cartItemSchema = z.object({
    productId: z.string(),
    quantity: z.number(),
});

export type CartItemRequestBody = z.infer<typeof cartItemSchema>;