"use client"

import { useState } from "react"
import CreateUserModal from "../modal/CreateUserModal";
import ResetPasswordModal from "../modal/ResetPasswordModal";
import ChangeUserStatusModal from "../modal/ChangeUserStatusModal";
interface prop {
    data: [propsData],
    token: string | undefined
}
interface propsData {
    id: string,
    phone: string,
    admin_role: string,
    first_name: string,
    last_name: string,
    user_status: string,
}
const status:{[key: string]: string} = {
    "active": "فعال",
    "not-active": "غیر فعال"
}
export default function CustomerTable(props: prop) {
    const [modal, setModal] = useState<boolean>(false);
    const [resetPasswordModal, setResetPasswordModal] = useState<boolean>(false);
    const [changeStatusModal, setChangeStatusModal] = useState<boolean>(false);
    const [selectedResetPassword, setSelectedResetPassword] = useState<string>("");
    return (<>
        {
            modal && <CreateUserModal token={props.token} close={() => { setModal(false) }} />
        }

        {
            resetPasswordModal ? <ResetPasswordModal token={props.token}  close={() => { setResetPasswordModal(false) }} id={selectedResetPassword} /> : ""
        }
        {
            changeStatusModal ? <ChangeUserStatusModal  token={props.token}  close={() => { setChangeStatusModal(false) }} id={selectedResetPassword} /> : ""
        }
        <div className="w-full mb-12 xl:mb-0 md:px-4 mx-auto md:mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">

                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700"> لیست کاربران  </h3>
                        </div>

                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right my-3">
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase p-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => { setModal(true) }}>ایجاد کاربر</button>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr className="text-center">
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    ردیف
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    نام
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    نام خانوادگی
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    موبایل
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    نوع کاربر
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    وضعیت کاربر
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    بازیابی رمز عبور
                                </th>
                                <th className="bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    تغییر وضعیت
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                props.data.map((data:propsData, index:number) => {
                                    return (
                                        <tr key={index} className="text-center hover:bg-gray-100">
                                            <th className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  text-blueGray-700 ">
                                                {index + 1}

                                            </th>
                                            <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                {data.first_name}
                                            </td>
                                            <td className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {data.last_name}

                                            </td>
                                            <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {data.phone}

                                            </td>
                                            <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {data.admin_role}

                                            </td>
                                            <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {status[data.user_status]
                                                }

                                            </td>
                                            <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <button onClick={() => { setResetPasswordModal(true); setSelectedResetPassword(data.id) }}
                                                    className="bg-sky-600 text-white active:bg-sky-700 text-xs font-bold uppercase p-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">بازیابی رمز عبور</button>
                                            </td>
                                            <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <button  onClick={() => { setChangeStatusModal(true); setSelectedResetPassword(data.id) }}
                                                         className=" bg-white text-gray-700 active:bg-gray-100  hover:bg-gray-50 text-xs font-bold uppercase p-3 rounded border outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >تغییر وضعیت</button>
                                            </td>
                                        </tr>
)
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>)
}
