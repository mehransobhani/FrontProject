import { z } from 'zod'

export const BrandFormValidation = z.object({
    brand: z.string().min(1,"نام برند نمیتواند خالی باشد")
})
export const LoginFormValidation = z.object({
    password: z.string().min(100),
})
