import {addBrand} from "@/app/admin/api/BrandApi";

interface props {
    close: any,
    token: string|undefined,
}

import {IdentificationIcon} from "@heroicons/react/24/outline";
 import {BrandFormValidation} from "@/app/admin/FormValidation/FormValidation";
import {useState} from "react";
import {BrandNameValidation} from "@/app/admin/FormValidation/BrandFormValidation";
import {toast} from "react-toastify";

export default function CreateBrandModal(props: props) {

     const [brandValidationError, setBrandValidationError] = useState<any>(undefined);

    async function addBrandApi(e: FormData) {
        const brand: FormDataEntryValue | null = e.get("name");
        try {
            const validatedData = BrandFormValidation.parse({brand})
        } catch (err: any) {
            toast.error("پر کردن نام برند اجباریست")
            return;
        }
        try {
            const newBrand = await addBrand(brand, props.token);
            props.close();
            toast.success("برند با موفقیت ایجاد شد ")


        } catch (e) {

            toast.error("خطایی در ایجاد برند پیش آمد ")
        }
    }

    function BrandValidationHandle(e: any) {
         const brand: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = BrandNameValidation.parse({brand})
            setBrandValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setBrandValidationError(error[0].message)
            return;
        }
    }

    return (<>
        <div
            onClick={props.close}
            className="py-12 bg-gray-700 bg-opacity-80 transition duration-150 ease-in-out fixed top-0 right-0 bottom-0 left-0 z-50 "
            id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div
                    onClick={(e):void=>{ e.stopPropagation()}}
                    className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 ">
                    <div className="w-12 flex justify-start text-gray-600 mb-3">
                        <IdentificationIcon/>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">ایجاد برند</h1>
                    <form action={addBrandApi}>

                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal"> نام
                            برند</label>

                        <input name={"name"}
                               onBlur={BrandValidationHandle}
                               className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                               placeholder="نام برند"/>
                        {brandValidationError ? <div
                            className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                            role="alert">
                            {brandValidationError}
                        </div> : ""}

                        <div className="flex items-center justify-start w-full">
                            <button type={"submit"}
                                    className="mx-1 focus:outline-none   focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">ایجاد
                            </button>
                            <button
                                className="mx-1 focus:outline-none    focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                onClick={props.close}>انصراف
                            </button>
                        </div>
                    </form>
                    <button
                        className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded  focus:outline-none focus:ring-gray-600"
                        aria-label="close modal" role="button" onClick={props.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20"
                             height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </>)
}
