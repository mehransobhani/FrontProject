import {JDate} from "@/app/admin/JDate/JDate";

interface prop {
    data: any,
    close:any
}

export default function ServiceDetailsModal(props: prop) {


    const status:{[key: string]: string} = {
        "open": "باز",
        "close": "بسته",
        "in-progress": "درحال انجام",
    }
    const serviceStatus = props?.data?.status

    return (<>
        <div
            onClick={props.close}
            className="py-2 sm:py-12 bg-gray-700 transition text-gray-800 bg-opacity-80 duration-150 ease-in-out z-50 fixed top-0 right-0 bottom-0 left-0 " id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-[60%] h-screen overflow-y-scroll ">
                <div
                    onClick={(e): void => {
                        e.stopPropagation()
                    }}
                    className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                    <div className={"py-4 font-bold text-xl"}>جزئیات سرویس</div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>نام</span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{props.data.first_name}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>نام خانوادگی</span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{props.data.last_name}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>برند  </span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{props.data.brand}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>ادرس  </span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{props.data.address}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>شماره موبایل  </span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{props.data.phone}</span>
                        </div>
                    </div>
                    <hr/>

                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>پیگیری</span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{props.data.description}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>تاریخ پیگیری</span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}> {JDate(props.data.last_update)}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={"py-1"}>
                        <span className={"text-gray-800 font-bold"}>وضعیت  </span>
                        <br/>
                        <div className={"mt-0 sm:mt-2"}>
                            <span className={"text-gray-600 font-bold"}>{status[serviceStatus]}</span>
                        </div>
                    </div>
                    <hr/>
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
