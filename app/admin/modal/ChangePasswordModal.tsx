import {changePassword} from "@/app/admin/api/UserApi";

interface props {
    close: any,
    token: string|undefined,
}

import {IdentificationIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {UserPasswordValidation} from "@/app/admin/FormValidation/UserFormValidation";
import {toast} from "react-toastify";

export default function ChangePasswordModal(props: props) {

     const [oldPasswordValidationError, setOldPasswordValidationError] = useState<any>(undefined);
    const [newPasswordValidationError, setNewPasswordValidationError] = useState<any>(undefined);
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    async function changePasswordHandle(e:any) {
        e.preventDefault()
        try {
            let password=oldPassword;
            UserPasswordValidation.parse({password})
            setOldPasswordValidationError(undefined)

        } catch (err: any) {
            let error = JSON.parse(err.message);
            setOldPasswordValidationError(error[0].message)
            return;
        }
        try {
            let password=newPassword;
            UserPasswordValidation.parse({password})
            setNewPasswordValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setNewPasswordValidationError(error[0].message)
            return;
        }


        try {
           let response=await changePassword(oldPassword,newPassword,confirmPassword,props.token);
           toast.success(response.message);
          } catch (e) {
            toast.error("مشکلی در اجرای عملیات پیش آمد .");
        }
    }

    function OldPasswordValidationHandle(e: any) {
         const password: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = UserPasswordValidation.parse({password})
            setOldPasswordValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setOldPasswordValidationError(error[0].message)
            return;
        }
    }
    function NewPasswordValidationHandle(e: any) {
         const password: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = UserPasswordValidation.parse({password})
            setNewPasswordValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setNewPasswordValidationError(error[0].message)
            return;
        }
    }
    return (<>
        <div
            className="py-12 bg-gray-700 bg-opacity-80 transition duration-150 ease-in-out fixed top-0 right-0 bottom-0 left-0 z-50 "
            id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-12 flex justify-start text-gray-600 mb-3">
                        <IdentificationIcon/>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">ویرایش کلمه عبور</h1>

                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            کلمه عبور فعلی</label>

                        <input name={"old_password"}
                               type={"password"}

                               onChange={(e)=>{setOldPassword(e.target.value)}}

                               onBlur={OldPasswordValidationHandle}
                               className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                               placeholder="  کلمه عبور فعلی"/>
                        {oldPasswordValidationError ? <div
                            className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                            role="alert">
                            {oldPasswordValidationError}
                        </div> : ""}

                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            کلمه عبور جدید</label>

                        <input name={"password"}
                               type={"password"}
                               onChange={(e)=>{setNewPassword(e.target.value)}}
                               onBlur={NewPasswordValidationHandle}
                               className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                               placeholder="کلمه عبور جدید"/>
                        {newPasswordValidationError ? <div
                            className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                            role="alert">
                            {newPasswordValidationError}
                        </div> : ""}


                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            تکرار کلمه عبور جدید</label>

                        <input name={"confirm_pass"}
                               type={"password"}

                               onChange={(e)=>{setConfirmPassword(e.target.value)}}

                               className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                               placeholder=" تکرار کلمه عبور جدید"/>




                        <div className="flex items-center justify-start w-full">
                            <button onClick={changePasswordHandle}
                                    className="mx-1 focus:outline-none   focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">ویرایش
                            </button>
                            <button
                                className="mx-1 focus:outline-none    focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                onClick={props.close}>انصراف
                            </button>
                        </div>
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
