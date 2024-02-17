"use client"
import {
    AddressFormValidation,
    FnameFormValidation,
    LnameFormValidation,
    PhoneFormValidation,
    registerFormValidation
} from "@/app/FormValidation/ServiceFormValidation";
import {registerService} from "@/app/api/ServicesApi";
import {useState} from "react";
import {toast} from "react-toastify";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

interface prop {
    brands: []
}

export default function ContactUsForm(props: prop) {

    const [fNameEroor, setFNameError] = useState(undefined);
    const [lNameEroor, setLNameError] = useState(undefined);
    const [phoneEroor, setPhoneError] = useState(undefined);
    const [addressEroor, setAddressError] = useState(undefined);

    const p2e = (s: string): string => s.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());    function FNameValidationHandle(e: any) {
        const fName: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = FnameFormValidation.parse({fName})
            setFNameError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);

            setFNameError(error[0].message)
            return;
        }
    }

    function LNameValidationHandle(e: any) {
        const lName: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = LnameFormValidation.parse({lName})
            setLNameError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setLNameError(error[0].message)
            return;
        }
    }

    function PhoneValidationHandle(e: any) {
        const phone: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = PhoneFormValidation.parse({phone})
            setPhoneError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setPhoneError(error[0].message)
            return;
        }
    }

    function addressValidationHandle(e: any) {
        const address: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = AddressFormValidation.parse({address})
            setAddressError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setAddressError(error[0].message)
            return;
        }
    }
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    async function registerForm(e: any) {

        let fName = e.get("fname");
        let lName = e.get("lname");
        let phone = p2e(e.get("phone"));
        let address = e.get("address");
        let brand = e.get("brand");
        try {
            const validatedData = registerFormValidation.parse({fName, lName, phone, address})
        } catch (err: any) {
            let error = JSON.parse(err.message);
            error.map((item: any) => {
                toast.warning(item.message)
            })
            return;
        }

        let registerData = await registerService(fName, lName, phone, brand, address);
        if (registerData.status == 201) {
            toast.success("درخواست با موفقیت ثبت شد، همکاران ما در اسرع وقت با شما تماس خواهند گرفت")
            await sleep(5000);
            redirect("/")
        } else {
            toast.error("مشکلی در ثبت درخواست پیش آمد")

        }
    }

    return (
        <>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true">

                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        تماس با ما و درخواست ارسال تعمیرکار
                    </h2>
                </div>
                <form action={registerForm}   className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                        <div className="sm:col-span-2">
                            <label htmlFor="fname"
                                   className="block text-sm font-semibold leading-6 text-black">
                                نام
                                <span className={"text-red-500 px-2"}>*</span>

                            </label>

                            <div className="mt-2.5">
                                <input type="text" name="fname" id="fname" autoComplete="organization"
                                       onBlur={FNameValidationHandle}
                                       className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-sky-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"/>
                                {fNameEroor ? <div
                                    className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                    role="alert">
                                    {fNameEroor}
                                </div> : ""}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="lname"
                                   className="block text-sm font-semibold leading-6 text-black"> نام خانوادگی
                                <span className={"text-red-500 px-2"}>*</span>

                            </label>
                            <div className="mt-2.5">
                                <input type="text" name="lname" id="lname" autoComplete="organization"
                                       onBlur={LNameValidationHandle}
                                       className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-sky-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"/>
                                {lNameEroor ? <div
                                    className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                    role="alert">
                                    {lNameEroor}
                                </div> : ""}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone"
                                   className="block text-sm font-semibold leading-6 text-black">
                                شماره موبایل
                                <span className={"text-red-500 px-2"}>*</span>
                            </label>
                            <div className="mt-2.5">
                                <input type="text" name="phone" id="phone" autoComplete="organization"
                                       onBlur={PhoneValidationHandle}

                                       className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-sky-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"/>
                                {phoneEroor ? <div
                                    className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                    role="alert">
                                    {phoneEroor}
                                </div> : ""}
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="brand"
                                       className="block text-sm font-semibold leading-6 text-black">برند
                                    <span className={"text-red-500 px-2"}>*</span>

                                </label>
                                <div className="mt-2.5">
                                    <select name="brand"
                                            className="p-2 mb-5 mt-2 bg-white text-gray-600 focus:outline-none focus:border focus:border-sky-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                                        {props.brands && props.brands.map((item,index:number) => {
                                            return (
                                                <option value={item} key={index}>
                                                    {item}
                                                </option>
                                           )
                                        })}
                                    </select>
                                </div>
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="address"
                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                    ادرس :
                                    <span className={"text-red-500 px-2"}>*</span>

                                </label>
                                <div className="mt-2.5">
                                    <textarea name="address" id="address"
                                              onBlur={addressValidationHandle}
                                              className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-sky-600 font-normal w-full h-40 flex items-center pl-3 text-sm border-gray-300 rounded border"></textarea>


                                </div>
                                {addressEroor ? <div
                                    className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                    role="alert">
                                    {addressEroor}
                                </div> : ""}


                            </div>
                        </div>

                        <div className="mt-10">
                            <button type="submit"
                                    className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                خیره
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
