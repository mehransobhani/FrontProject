interface prop {
    id: string,
    close: any,
    token: string | undefined

}
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { changeUserStatus } from "../api/UserApi";
export default function ChangeUserStatusModal(props: prop) {
    const [responseError, setResponseError] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(false);
    async function changeStatusHandle(e: any) {
        try {
            const response = await changeUserStatus(props.id, e.get("status"), props.token);
            props.close();
        }
        catch (error) {
            setResponseError(true);
        }
    }


    return (<>
        <div className="py-12 bg-gray-700 transition  bg-opacity-80 duration-150 ease-in-out z-50 fixed top-0 right-0 bottom-0 left-0 " id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                        <ExclamationCircleIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <form action={changeStatusHandle}>
                        <div className="mb-5">
                            <span className="font-bold text-gray-500">وضعیت کاربر</span>
                            <select name="status" className="p-2 mb-5 mt-2 bg-white text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" >
                                <option value={"active"}>فعال</option>
                                <option value={"not-active"}>غیرفعال</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-start w-full">
                            <button className="mx-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">ویرایش</button>
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
                    </form>
                </div>

            </div>
        </div>
    </>)
}