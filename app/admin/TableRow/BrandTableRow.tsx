"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { editBrand } from "../api/BrandApi";
import {JDate} from "@/app/admin/JDate/JDate";
interface data {
    id: string,
    brand: string,
    created_by: string,
    created_date: string,
    updated_date: string,
}
interface propsData {
    data: data,
    token:string|undefined,
    index:number
}

export default function BrandTableRow(props: propsData) {
    const [edit, setEdit] = useState(false);
    const [editName, setEditName] = useState("props.data.brand");

    async function editBrandHandle(id:string|null) {
        const response=editBrand(id,editName,props.token);

    }

    return (<>
        <tr className="text-center hover:bg-gray-100">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  text-blueGray-700 ">
                {props.index+1}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                {edit ? <input type={"text"} defaultValue={props.data.brand} onChange={(e)=>{setEditName(e.target.value)}}
                    className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                    :
                    <span>
                        {props.data.brand}
                    </span>
                }
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                    <span>
                        {props.data.created_by}
                    </span>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                <span>
                    {JDate(props.data.created_date)}
                </span>

            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <button
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">حذف
                </button>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {edit

                    ?
                    <>
                        <button
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                                setEdit(false)
                            }}>انصراف
                        </button>
                        <button
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                                editBrand(props.data.id)
                                setEdit(false)
                            }}>ذخیره
                        </button>

                    </> :

                    <button
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                            setEdit(true)
                        }}>ویرایش
                    </button>}
            </td>
        </tr>
    </>)
}
