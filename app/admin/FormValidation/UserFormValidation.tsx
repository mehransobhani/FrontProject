import {z} from "zod";

export const UserFirstNameValidation = z.object({
    first_name: z.string().min(1,"نام کاربر نمیتواند خالی باشد")
})
export const UserLastNameValidation = z.object({
    last_name: z.string().min(1,"نام خانوادگی کاربر نمیتواند خالی باشد")
})
export const UserPhoneValidation = z.object({
    phone: z.string().min(1,"شماره موبایل کاربر نمیتواند خالی باشد")
        .max(11,"فرمت شماره موبایل نادرست است")

})
export const UserPasswordValidation = z.object({
    password: z.string()
        .min(8, 'کلمه عبور باید بیشتر از 8 حرف باشد')
         .regex(/(?=.*[!@#$%&*-])[A-Z a-z\d!@#$%&*-]{8,}$/ ,"باید حداقل یک حرف خاص در کلمه عبور وجود داشته باشد")

})
export const UserPasswordConfigValidation = z.object({
    password_confirmation: z.string().min(1,"نام کاربر نمیتواند خالی باشد")
})
