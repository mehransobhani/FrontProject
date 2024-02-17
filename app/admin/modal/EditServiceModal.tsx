import {addBrand} from "@/app/admin/api/BrandApi";

interface props {
    close: any,
    data: any,
    token: string|undefined,
    change: any,
    page:number
}

import {IdentificationIcon} from "@heroicons/react/24/outline";
 import {BrandFormValidation} from "@/app/admin/FormValidation/FormValidation";
import {useState} from "react";
import {BrandNameValidation} from "@/app/admin/FormValidation/BrandFormValidation";
import {toast} from "react-toastify";
import {updateService} from "@/app/admin/api/ServiceApi";

export default function EditServiceModal(props: props) {


    async function editClickHandle(e:FormData){
        let description:FormDataEntryValue|null=e.get("description");
        let status:FormDataEntryValue|null=e.get("status");
        let id:string=props.data.id;

        try {
            const update = await updateService(id, status, description, props.token);
            toast.success("سرویس با موفقیت ویرایش شد ")
        props.close();
            if(props.page>1)
                props.change(props.page);
        }
        catch (e)
        {
            toast.error("خطایی در ویرایش سرویس پیش آمد ")
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
                    className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-12 flex justify-start text-gray-600 mb-3">
                        <IdentificationIcon/>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">ویرایش سرویس</h1>
                    <form action={editClickHandle}>

                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            وضعیت سرویس</label>
                        <br/>

                        <select name={"status"} defaultValue={props.data.status}
                            className=" w-full border py-2 rounded-md  bg-white bg-none  px-2 text-gray-500  focus:ring-inset focus:ring-indigo-600 sm:text-sm">
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
<br/>
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                            پیگیری </label>

                        <textarea name={"description"} defaultValue={props.data.description}
                               className="p-2 mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-32 flex items-center pl-3 text-sm border-gray-300 rounded border"
                               placeholder="پیگیری">
                        </textarea>

                        <div className="flex items-center justify-start w-full">
                            <button type={"submit"}
                                    className="mx-1 focus:outline-none   focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">ذخیره
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
