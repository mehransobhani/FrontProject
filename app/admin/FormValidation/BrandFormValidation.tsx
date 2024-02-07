import {z} from "zod";

export const BrandNameValidation = z.object({
    brand: z.string().min(1,"نام برند نمیتواند خالی باشد")
})
