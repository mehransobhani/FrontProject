import {toast} from "react-toastify";

interface prop {
    id: string,
    token: string | undefined,
    close: any
}
import { KeyIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { resetPassword } from "../api/UserApi";
export default function ResetPasswordModal(props: prop) {

     async function resetPasswordHandle(e: any) {
        try {
            const response = await resetPassword(props.id, props.token);
            toast.success("بازیابی رمز عبور با موفقیت انجام شد")

            props.close();

        }
        catch (error) {
            toast.error("خطایی در بازیابی رمز عبور پیش آمد ")

        }

    }



    return (<>
        <div className="py-12 bg-gray-700 transition  bg-opacity-80 duration-150 ease-in-out z-50 fixed top-0 right-0 bottom-0 left-0 " id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                        <KeyIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="mb-5">
                        <div>
                            <span className="font-bold text-gray-500">
                                آیا از ریست رمزعبور کاربر اطمینان دارید ؟
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-start w-full">
                        <button onClick={resetPasswordHandle}
                            className="mx-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">بله</button>
                        <button onClick={props.close}
                            className="mx-1 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" >انصراف</button>
                    </div>
                    <button onClick={props.close} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </>)
}
