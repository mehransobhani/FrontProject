import {PhoneIcon} from "@heroicons/react/24/solid";
import {CursorArrowRaysIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import sony from "@/public/icon/sonyLogo.png"
import xvision from "@/public/icon/xvisionLogo.png"
import tcl from "@/public/icon/TclLogo.png"
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <div className="w-full  px-4">
                <div className=" py-10 text-center">
                    <span className="text-md font-bold text-gray-500">
همین حالا درخواست پشتیبانی تلویزیون های ایکس ویژن، تی سی ال و سونی خود را ثبت نمایید                    </span>
                </div>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-3 gap-2  py-10  sm:py-16"}>
                <div className={"flex  justify-center "}>
                    <div className={"rounded-full my-5 sm:my-0 w-32 h-32 shadow-xl bg-white border-2   justify-center items-center flex"}>

                        <Image src={xvision} alt={"xvision"} width={100} height={100}/>
                    </div>
                </div>

                <div className={"flex  justify-center "}>
                    <div className={"rounded-full my-5 sm:my-0 w-32 h-32 shadow-xl bg-white border-2   justify-center items-center flex"}>

                        <Image src={tcl} alt={"tcl"} width={100} height={100}/>
                    </div>
                </div>

                <div className={"flex  justify-center "}>
                    <div className={"rounded-full my-5 sm:my-0 w-32 h-32 shadow-xl bg-white border-2   justify-center items-center flex"}>

                        <Image src={sony} alt={"sony"} width={100} height={100}/>

                    </div>
                </div>

            </div>

            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2  py-10"}>
                <div className={"flex sm:justify-end justify-center"}>
                    <Link href={"contact-us"}>
                        <div
                            className="bg-yellow-300 p-4 rounded-xl relative flex h-16 items-center justify-center   ">
                            <div className="flex  items-center gap-4">
                                <span
                                    className="text-sm sm:text-lg font-bold text-gray-500">درخواست پشتیبانی آنلاین</span>
                                <div className=" w-8 h-8 rounded-full justify-center flex  items-center">
                                    <CursorArrowRaysIcon className="h-6 w-6 text-gray-500"/></div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={"flex sm:justify-start justify-center "}>
                    <div
                        className="bg-yellow-300 p-4 rounded-xl relative flex h-16 items-center justify-center   ">
                        <div className="flex  items-center gap-4">
                            <span className="text-sm sm:text-lg font-bold text-gray-500">۰۲۱-۹۱۳۰۳۶۶۶</span>
                            <div className=" w-8 h-8 rounded-full justify-center flex  items-center">
                                <PhoneIcon className="h-6 w-6 text-black justify-center items-center"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
