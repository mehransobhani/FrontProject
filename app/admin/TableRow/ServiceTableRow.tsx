"use client"
import { Dispatch, SetStateAction, useState } from "react";
import {getServiceHistory, updateService} from "../api/ServiceApi";
import ServiceHistoryModal from "../modal/ServiceHistoryModal";
import {JDate} from "@/app/admin/JDate/JDate";
import {  toast } from 'react-toastify';
import ServiceDetailsModal from "@/app/admin/modal/ServiceDetailsModal";
import EditServiceModal from "@/app/admin/modal/EditServiceModal";

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
interface historyData {
    description: string | null,
    service: string | null,
    status: string ,
    timestamp: string | null,
    user: string | null,
}

export default function ServiceTableRow(props: propsData) {
    const [edit, setEdit] = useState<boolean>(false);
     const [historyModal, setHistoryModal] = useState<boolean>(false);
     const [detailsModal, setDetailsModal] = useState<boolean>(false);
    const [history, setHistory] = useState<historyData[]>([]);
    const status:{[key: string]: string} = {
        "open": "باز",
        "close": "بسته",
        "in-progress": "درحال انجام",
    }
    async function showHistory(id: string) {
        const serviceHistory = await getServiceHistory(id , props.token);
        setHistoryModal(true);
        setHistory(serviceHistory);

    }


    const serviceStatus = props?.data?.status

    return (<>
        {
            historyModal && <ServiceHistoryModal data={history} close={() => { setHistoryModal(false) }} />
        }
        {
            detailsModal &&  <ServiceDetailsModal data={props.data} close={()=>{setDetailsModal(false)}} />
        }
        {
            edit &&  <EditServiceModal change={props.change} page={props.page} data={props.data} token={props.token} close={()=>{setEdit(false)}} />
        }
        <tr className="text-center hover:bg-gray-100" key={props.index}>

            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {props.index + 1}
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
             <span>{status[serviceStatus]}</span>
            </td>

            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                {JDate(props.data.created_date)}

            </td>

            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                <button onClick={() => {
                    setDetailsModal(true)
                }}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none   sm:ml-3 sm:w-auto sm:text-sm">
                    جزئیات
                </button>
            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                <button onClick={() => {
                    showHistory(props.data.id)
                }}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none   focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">تاریخچه
                    پیگیری
                </button>
            </td>
            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">

                        <button
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none   focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                                setEdit(true)
                            }}>ویرایش </button>
            </td>
        </tr>
    </>)
}
