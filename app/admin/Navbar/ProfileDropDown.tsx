"use client"
import {useState} from "react";
import profile from "@/public/icon/profile.jpg"
import Image from "next/image";
import Link from "next/link";
import ChangePasswordModal from "@/app/admin/modal/ChangePasswordModal";

export default function ProfileDropDown(props: {token:string|undefined , logout:any}) {
    const [show, setShow] = useState(false);
    const [changePasswordModal, setChangePasswordModal] = useState(false);
     return (
        <>

            {
                changePasswordModal && <ChangePasswordModal close={()=>setChangePasswordModal(false)} token={props.token}/>
            }
            <div className="w-12 h-12 bg-gray-300 rounded-full cursor-pointer mr-3 z-50" onClick={() => {
                setShow(!show)
            }}>
                <Image src={profile} alt={"profile"} className="w-12 h-12 rounded-full"/>
                {show == true ? <div id="dropdown-menu"
                                     className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2 p-2" role="menu" aria-orientation="vertical"
                         aria-labelledby="dropdown-button">

                        <button
                            onClick={() => setChangePasswordModal(true)}
                            className="flex block rounded-md  w-full   py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                            role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2"
                                 viewBox="0 0 32 32" id="desktop">
                                <path
                                    d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                            </svg>
                            <span className="px-3">
                                                ویرایش کلمه عبور
                                            </span>
                        </button>

                        <button type={"submit"}
                            onClick={() => props.logout()}
                            className="flex block rounded-md  w-full py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                            role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2"
                                 viewBox="0 0 32 32" id="desktop">
                                <path
                                    d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                            </svg>
                            <span className="px-3">
                                              خروج
                                            </span>
                        </button>


                    </div>
                </div> : ""}
            </div>
        </>
     );
}
