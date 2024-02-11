import { z } from 'zod'

export const FnameFormValidation = z.object({
    fName: z.string().min(1, "نام کاربر نمیتواند خالی باشد")
})

export const LnameFormValidation = z.object({
    lName: z.string().min(1, "نام خانوادگی کاربر نمیتواند خالی باشد")
})

export const AddressFormValidation = z.object({
    address: z.string().min(1, "ادرس نمیتواند خالی باشد")
})

export const PhoneFormValidation = z.object({
     phone: z.string().min(1,"شماره تلفن نمیتواند خالی باشد")
    .max(11,"فرمت شماره موبایل نادرست است")
})


export const registerFormValidation = z.object({
    fName: z.string().min(1, "نام کاربر نمیتواند خالی باشد"),

    lName: z.string().min(1, "نام خانوادگی کاربر نمیتواند خالی باشد"),

    address: z.string().min(1, "ادرس نمیتواند خالی باشد"),

    phone: z.string().min(1,"شماره تلفن نمیتواند خالی باشد")
    .max(11,"فرمت شماره موبایل نادرست است")
})

