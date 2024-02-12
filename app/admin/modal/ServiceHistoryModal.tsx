import {JDate} from "@/app/admin/JDate/JDate";

interface prop {
    data: [propData],
    close:any
}

interface propData {
    description: string | null,
    service: string | null,
    status: string | null,
    timestamp: string | null,
    user: string | null,
}
export default function ServiceHistoryModal(props: prop) {

    const status:{open:string,close:string,"in-progress":string} = {
        "open": "باز",
        "close": "بسته",
        "in-progress": "درحال انجام",
    }

    return (<>
        <div className="py-12 bg-gray-700 transition  bg-opacity-80 duration-150 ease-in-out z-50 fixed top-0 right-0 bottom-0 left-0 " id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-full  ">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet"
                             width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"/>
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"/>
                        </svg>

                    </div>
                    <div className={"py-4"}>تاریخچه پیگیری سرویس</div>

                    <div className="block w-full overflow-x-auto overflow-scroll h-[70vh]">
                        <table className="items-center bg-transparent w-full border-collapse ">
                            <thead>
                            <tr className="text-center">

                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    تاریخ
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    کاربر
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    وضعیت
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                    پیگیری
                                </th>

                            </tr>
                            </thead>

                            <tbody>
                            {
                                props.data.map((item) => {
                                    return <>
                                        <tr className="text-center">

                                            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                                {item.timestamp ?JDate(item.timestamp): "-"}
                                            </td>
                                            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                                {item.user ?? "-"}
                                            </td>
                                            <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                                {status[item.status] ?? "-"}
                                            </td>
                                            <td className="px-6 bg-blueGray-50 w-60 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold ">
                                                {item.description ?? "-"}
                                            </td>
                                        </tr>

                                    </>
                                })
                            }
                            </tbody>

                        </table>
                    </div>

                    <button
                        className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                        aria-label="close modal" role="button" onClick={props.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20"
                             height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
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
