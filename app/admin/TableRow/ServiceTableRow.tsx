"use client"
import { Dispatch, SetStateAction, useState } from "react";
import {getServiceHistory, updateService} from "../api/ServiceApi";
import ServiceHistoryModal from "../modal/ServiceHistoryModal";
import {JDate} from "@/app/admin/JDate/JDate";
import {  toast } from 'react-toastify';

interface data {
    id: string,
    first_name: string,
    last_name: string,
    brand: string,
    status: string,
    created_date: string,
    description: string,
    last_update: string
}
interface propsData {
    data: data,
    change: any,
    token:string|undefined,
    index:number
    page:number
}

export default function ServiceTableRow(props: propsData) {
    const [edit, setEdit] = useState(false);
     const [historyModal, setHistoryModal] = useState(false);
    const [history, setHistory] = useState([]);
    const status:{open:string,close:string,"in-progress":string} = {
        "open": "باز",
        "close": "بسته",
        "in-progress": "درحال انجام",
    }

    const [changedStatus, setChangedStatus] = useState(props.data.status);
    const [changedDescription, setChangedDescription] = useState(props.data.description);

    async function showHistory(id: string) {
        const serviceHistory = await getServiceHistory(id , props.token);
        setHistoryModal(true);
        setHistory(serviceHistory);

    }

   async function editClickHandle(){
        let description:string=changedDescription;
        let status:string=changedStatus;
        let id:string=props.data.id;

       try {
            const update = await updateService(id, status, description, props.token);
            toast.success("سرویس با موفقیت ویرایش شد ")
           setEdit(false)
           if(props.page>1)
           props.change(props.page);
        }
        catch (e)
        {
            toast.error("خطایی در ویرایش سرویس پیش آمد ")
         }

    }

    const serviceStatus = props?.data?.status

    console.log(props.data);
    return (<>
        {
            historyModal && <ServiceHistoryModal data={history} close={() => { setHistoryModal(false) }} />
        }

        <tr className="text-center hover:bg-gray-100">

            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {props.index+1}
            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {props.data.first_name}
            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {props.data.last_name}

            </td>



            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {props.data.brand}
            </td>

            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {edit ? <>
                    <select
                        onChange={(e)=>{setChangedStatus(e.target.value)}}
                        className="w-[100px] border py-2 rounded-md  bg-white bg-none  px-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                        <option value={"open"} selected={props.data.status == "open"}>
                            باز
                        </option>
                        <option value={"close"} selected={props.data.status == "close"}>
                            بسته
                        </option>
                        <option value={"in-progress"} selected={props.data.status == "in-progress"}>
                            درحال انجام
                        </option>

                    </select>
                </> : <span>{status[serviceStatus]}</span>}

            </td>

            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {JDate(props.data.created_date)}

            </td>
            <td className=" w-52 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0   font-semibold  ">
                {edit ? <textarea
                    onChange={(e)=>{setChangedDescription(e.target.value)}}
                    className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                    {props.data.description}
                </textarea>
                    :
                    <span>
                        {props.data.description}
                    </span>
                }
            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {JDate(props.data.last_update)}

            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                <button onClick={() => { showHistory(props.data.id) }}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">تاریخچه پیگیری</button>
            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {
                    edit ? <>
                        <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => { setEdit(false) }}>انصراف  </button>
                        <button  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={editClickHandle}>ذخیره  </button>

                    </> :
                        <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => { setEdit(true) }}>ویرایش  </button>

                }
             </td>
        </tr>
    </>)
}
