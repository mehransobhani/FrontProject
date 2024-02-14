"use client"
import ServiceTableRow from "../TableRow/ServiceTableRow"
import Pagination from "@/app/admin/pagination/Pagination";
import {useState} from "react";
import {getServicesPagination} from "@/app/admin/api/ServiceApi";

interface propsData {
    id: string,
    first_name: string,
    last_name: string,
    brand: string,
    status: string,
    created_date: string,
    description: string,
    last_update: string
}

interface propObject {
    results: [propsData]
    count: number,
    next: boolean,
    previous: boolean
}

interface prop {
    data: propObject,
    token: string | undefined
}

export default function ServiceTable(props: prop) {
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(props.data.next ? true : false);
    const [response, setResponse] = useState<propObject | undefined>(undefined);

    async function changePageHandle(pages: number = page) {
        let data = await getServicesPagination(pages, props.token);
        setResponse(data);
        setPage(pages);

        if (data.next) {
            setHasMore(true);
        } else {
            setHasMore(false);
        }
    }


    return (<>
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">

                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700"> لیست سرویس ها </h3>
                        </div>

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
                                نام
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                نام خانوادگی

                            </th>


                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                برند
                            </th>

                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                وضعیت
                            </th>

                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                تاریخ ایجاد
                            </th>

                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                مشاهده جزئیات
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                تاریخچه پیگیری
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                                ویرایش
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            !response ? props.data.results.map((data: propsData, index: number) => {
                                    return (
                                        <ServiceTableRow index={index} key={index} data={data} token={props.token}
                                                         change={changePageHandle} page={page}/>
                                    )
                                })
                                : response.results ? response.results.map((data: propsData, index: number) => {
                                    return (
                                        <ServiceTableRow index={index} key={index} data={data} token={props.token}
                                                         change={changePageHandle} page={page}/>
                                    )
                                }) : ""

                        }
                        </tbody>

                    </table>

                    <Pagination
                        page={page}
                        hasMore={hasMore}
                        nextPage={() => {
                            changePageHandle(page + 1)
                        }}
                        previousPage={() => {
                            changePageHandle(page - 1)
                        }}/>
                </div>
            </div>
        </div>
    </>)
}
