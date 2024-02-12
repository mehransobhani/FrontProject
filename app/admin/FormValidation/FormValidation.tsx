import { z } from 'zod'

export const BrandFormValidation = z.object({
    brand: z.string().min(1,"نام برند نمیتواند خالی باشد")
})

export const ChangePasswordFormValidation = z.object({
    newPassword: z.string()
        .min(8, 'کلمه عبور باید بیشتر از 8 حرف باشد')
        .regex(/(?=.*[!@#$%&*-])[A-Z a-z\d!@#$%&*-]{8,}$/ ,"باید حداقل یک حرف خاص در کلمه عبور وجود داشته باشد")

    ,  oldPassword: z.string()
        .min(8, 'کلمه عبور باید بیشتر از 8 حرف باشد')
        .regex(/(?=.*[!@#$%&*-])[A-Z a-z\d!@#$%&*-]{8,}$/ ,"باید حداقل یک حرف خاص در کلمه عبور وجود داشته باشد")

})

export const LoginFormValidation = z.object({
    password: z.string().min(100),
})
