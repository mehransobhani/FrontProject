"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
    const pathname = usePathname();
    console.log(pathname);
  return (
    <>
      <nav className="md:right-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-[#445861]  flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
          <div
              className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
              <button
                  className="cursor-pointer text-black w-12 bg-white opacity-100 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  type="button"
                  onClick={() => setCollapseShow("bg-[#445861] m-2 py-3 px-6")}
              >
                  <Bars4Icon/>
              </button>
               <h6 className="md:min-w-full text-blueGray-500 text-lg uppercase font-bold block ">
                  پنل مدیریت
              </h6>

              <ul className="md:hidden items-center flex flex-wrap list-none">
                  <li className="inline-block relative">
                  </li>
                  <li className="inline-block relative">
                  </li>
              </ul>
              <div
                  className={
                      "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                      collapseShow
                  }
              >
                  <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                      <div className="flex flex-wrap">
                          <div className="w-6/12">

                          </div>
                          <div className="w-6/12 flex justify-end">
                              <button
                                  type="button"
                                  className="cursor-pointer w-16 text-white   md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                  onClick={() => setCollapseShow("hidden")}
                              >
                                  <XMarkIcon/>
                              </button>
                          </div>
                      </div>
                  </div>

                  <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                      مدیریت کاربران
                  </h6>

                  <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                      <li className="items-center">
                          <Link href={"/admin/users"}>
                     <span
                         className={pathname == "/admin/users" ? "text-sky-300 hover:text-sky-400" : "text-slate-200 hover:text-slate-400"}>
                 کاربران
                         </span>
                          </Link>
                      </li>
                  </ul>

                  <hr className="my-4 md:min-w-full"/>
                  <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                      مدیریت سرویس ها
                  </h6>

                  <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                      <li className="items-center">
                          <Link href={"/admin/services"}>
                                       <span
                                           className={pathname == "/admin/services" ? "text-sky-300 hover:text-sky-400" : "text-slate-200 hover:text-slate-400"}>

                 سرویس ها
                                       </span>
                          </Link>
                      </li>

                      <li className="items-center">

                      </li>
                  </ul>

                  <hr className="my-4 md:min-w-full"/>
                  <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                      مدیریت برند ها
                  </h6>

                  <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                      <li className="items-center">
                          <Link href={"/admin/brands"}>
                                          <span
                                              className={pathname == "/admin/brands" ? "text-sky-300 hover:text-sky-400" : "text-slate-200 hover:text-slate-400"}>

                 برند ها
                                          </span>
                          </Link>
                      </li>

                      <li className="items-center">

                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
}
