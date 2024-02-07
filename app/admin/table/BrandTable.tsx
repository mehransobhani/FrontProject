"use client"

import { useState } from "react";
import CreateBrandModal from "../modal/CreateBrandModal";
import BrandTableRow from "@/app/admin/TableRow/BrandTableRow";

interface prop{
    data:[propsData
    ],
    token:string|undefined
}
interface propsData{
        id:string,
        brand:string,
        created_by:string,
        created_date:string,
        updated_date:string,
 }

export default function BrandTable(props:prop) {
    const [modal ,setModal]=useState(false);

    return (<>
      {
        modal&&<CreateBrandModal token={props.token} close={()=>{setModal(false)}}   />
    }
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">

                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700"> لیست برند ها  </h3>
                        </div>

                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right my-3">
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase p-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={()=>{setModal(true)}}> افزودن جدید  </button>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr className="text-center">
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    ردیف
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    نام برند
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                   ایجاد کننده
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    تاریخ ایجاد
                                </th>

                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    حذف برند
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    ویرایش برند
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                props.data.map((data)=>{return(<>
                                     <BrandTableRow  data={data}/>

                                </>)})
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>)
}
