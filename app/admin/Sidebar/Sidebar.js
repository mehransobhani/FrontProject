"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Bars4Icon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/solid";
export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const pathname = usePathname();
    console.log(pathname);
    return (<>
        <nav
            className="md:right-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-[#445861]  flex flex-wrap items-center justify-between relative md:w-56 z-10 py-4 px-6">
            <div
                className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <button
                    className="cursor-pointer text-black w-12 bg-white opacity-100 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button"
                    onClick={() =>
                        setCollapseShow("bg-[#445861]  py-3 px-6")}
                >
                    <Bars4Icon/>
                </button>
                <h6 className="md:min-w-full text-slate-50 py-4 text-xl bg-transparent  md:bg-gray-800 rounded-lg bg-opacity-70   text-center uppercase font-bold block ">
                    پنل مدیریت
                </h6>


                <div
                    className={"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow}
                >
                    <div
                        className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                            </div>
                            <div className="w-6/12 flex justify-end">
                                <button
                                    type="button"
                                    className="cursor-pointer w-16 text-white   md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                    onClick={() =>
                                        setCollapseShow("hidden")}
                                >
                                    <XMarkIcon/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={"mt-2"}>

                        <Link href={"/admin/users"}>
                            <div
                                className={["flex items-center p-2  rounded-lg  text-white hover:bg-gray-700 group", pathname == "/admin/users" ? "bg-gray-700" : ""].join(" ")}>
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">کاربران</span>
                            </div>
                        </Link>
                    </div>
                    <div className={"mt-2"}>
                        <Link href={"/admin/brands"}>
                            <div
                                className={["flex items-center p-2  rounded-lg  text-white hover:bg-gray-700 group",  pathname == "/admin/brands" ?"bg-gray-700":"" ].join(" ")}>
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">برند ها</span>
                            </div>
                        </Link>
                    </div>
                    <div className={"mt-2"}>
                        <Link href={"/admin/services"}>
                            <div
                                className={["flex items-center p-2  rounded-lg  text-white hover:bg-gray-700 group", pathname == "/admin/services" ? "bg-gray-700" : ""].join(" ")}>
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">سرویس ها</span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    </>);
}
