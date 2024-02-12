import {BrandNameValidation} from "@/app/admin/FormValidation/BrandFormValidation";

interface props{
    close:any,
    token:string|undefined
}
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { addUser } from "../api/UserApi";
import {useState} from "react";
import {
    UserFirstNameValidation,
    UserLastNameValidation,
    UserPasswordValidation,
    UserPhoneValidation
} from "@/app/admin/FormValidation/UserFormValidation";
export default function CreateUserModal(props :props){

    const [responseError, setResponseError] = useState(false);
    const [passwordValidationError, setPasswordValidationError] = useState(undefined);
    const [firstNameValidationError, setFirstNameValidationError] = useState(undefined);
    const [lastNameValidationError, setLastNameValidationError] = useState(undefined);
    const [phoneValidationError, setPhoneValidationError] = useState(undefined);
    const [confirmPasswordValidationError, setConfirmPasswordValidationError] = useState(undefined);
    async function addUserForm(e:FormData) {

        let first_name=e.get("first_name");
        let last_name=e.get("last_name");
        let phone=e.get("phone");
        let password=e.get("password");
        let password_confirmation=e.get("password_confirmation");

        try{
       let response= await addUser(first_name,
        last_name,
        phone,
        password,
        password_confirmation , props.token);
        props.close();

        }
        catch(error)
        {
            console.log(error)
            setResponseError(true);
        }
     }


    function PasswordValidationHandle(e: any) {
        setResponseError(false)
        const password: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = UserPasswordValidation.parse({password})
            setPasswordValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setPasswordValidationError(error[0].message)
            return;
        }
    }


    function FirstNameValidationHandle(e: any) {
        setResponseError(false)
        const first_name: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = UserFirstNameValidation.parse({first_name})
            setFirstNameValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setFirstNameValidationError(error[0].message)
            return;
        }
    }



    function LastNameValidationHandle(e: any) {
        setResponseError(false)
        const last_name: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = UserLastNameValidation.parse({last_name})
            setLastNameValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setLastNameValidationError(error[0].message)
            return;
        }
    }
    function PhoneValidationHandle(e: any) {
        setResponseError(false)
        const phone: FormDataEntryValue | undefined = e.target.value;
        try {
            const validatedData = UserPhoneValidation.parse({phone})
            setPhoneValidationError(undefined)
        } catch (err: any) {
            let error = JSON.parse(err.message);
            setPhoneValidationError(error[0].message)
            return;
        }
    }

    return(<>
             <div className="py-12 bg-gray-700 bg-opacity-80 transition duration-150 ease-in-out z-50 fixed top-0 right-0 bottom-0 left-0  " id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-12 flex justify-start text-gray-600 mb-3"  >
                        <UserCircleIcon />
                        </div>
                        <form action={addUserForm}>
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">ایجاد کاربر</h1>
                        <label   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">نام</label>
                        <input onBlur={FirstNameValidationHandle}  className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="نام" name="first_name" />
                            {firstNameValidationError ? <div
                                className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                role="alert">
                                {firstNameValidationError}
                            </div> : ""}
                        <label   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">نام خانوادگی</label>
                        <input onBlur={LastNameValidationHandle}  className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="نام خانوادگی" name="last_name" />
                            {lastNameValidationError ? <div
                                className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                role="alert">
                                {lastNameValidationError}
                            </div> : ""}
                        <label   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">موبایل</label>
                        <input onBlur={PhoneValidationHandle}  className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="موبایل" name="phone" />
                            {phoneValidationError ? <div
                                className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                role="alert">
                                {phoneValidationError}
                            </div> : ""}
                        <label   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">  رمز عبور  </label>
                        <input onBlur={PasswordValidationHandle} type="password"
                        className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="کلمه عیور"  name="password"/>
                            {passwordValidationError ? <div
                                className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                role="alert">
                                {passwordValidationError}
                            </div> : ""}

                        <label   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">تایید رمز عبور  </label>
                        <input type="password"
                         className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder=" تکرار کلمه عیور"  name="password_confirmation"/>


                        <div className="flex items-center justify-start w-full">
                            <button type="submit" className="mx-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">ایجاد</button>
                            <button className="mx-1 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"  onClick={props.close}>انصراف</button>
                        </div>
                        </form>
                        <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"  aria-label="close modal" role="button" onClick={props.close}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
