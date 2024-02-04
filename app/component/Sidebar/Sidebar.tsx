"use client"
import Link from "next/link";
 import React from "react";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
     return (
        <>
            <nav className="md:right-0 bg-[#445861] md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                     <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                     <Link href="/">

                    </Link>
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                         <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link href="/">

                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                         <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                         <hr className="my-4 md:min-w-full" />
                         <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            mehran Layout Pages
                        </h6>

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link href="/admin/dashboard">

                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/settings">

                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/tables">

                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/maps">

                                </Link>
                            </li>
                        </ul>

                         <hr className="my-4 md:min-w-full" />
                         <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Auth Layout Pages
                        </h6>

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="items-center">
                                <Link href="/auth/login">

                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/auth/register">

                                </Link>
                            </li>
                        </ul>

                         <hr className="my-4 md:min-w-full" />
                         <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            No Layout Pages
                        </h6>

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="items-center">
                                <Link href="/landing">

                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/profile">

                                </Link>
                            </li>
                        </ul>

                         <hr className="my-4 md:min-w-full" />
                         <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Documentation
                        </h6>
                         <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>

                            <li className="inline-flex">

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
