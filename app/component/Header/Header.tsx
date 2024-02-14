"use client"
import logo from "@/public/icon/mad.png"
import { log } from "console"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon } from "@heroicons/react/24/solid";
export default function Header() {
    return (
        <>
            <div className="w-full bg-slate-100 py-5 text-black hidden sm:block">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="flex flex-1 items-center justify-start">

                            <div className="hidden sm:mx-6 sm:block">
                                <div className="flex  items-start ">
                                    <div className="w-36" >
                                        <Image src={logo} layout={"responsive"} alt={"logo"} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-end">

                            <div className="hidden sm:mx-6 sm:block ">
                                <div className="flex  items-center gap-4">
                                    <span className="text-xl font-bold text-gray-500">۰۲۱-۹۱۳۰۹۵۷۵</span>
                                    <div className="bg-sky-600 w-8 h-8 rounded-full justify-center flex  items-center">
                                        <PhoneIcon className="h-4 w-4 text-white justify-center items-center" />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:mx-6 sm:block">
                                <div className="flex  items-center gap-4">
                                    <span className="text-xl font-bold text-gray-500">۰۲۱-۹۱۳۰۳۶۶۶</span>
                                    <div className="bg-sky-600 w-8 h-8 rounded-full justify-center flex  items-center">
                                        <PhoneIcon className="h-4 w-4 text-white justify-center items-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
