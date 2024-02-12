
import ProfileDropDown from "@/app/admin/Navbar/ProfileDropDown";
 export default function AdminNavbar(props:{token:string|undefined}) {


    return (

        <>
            <nav className="absolute top-0 left-0 w-full z-10  bg-[#445861] md:flex-row md:flex-nowrap md:justify-start hidden md:flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">

                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <i className="fas fa-search"></i>
                            </span>
                            <ProfileDropDown token={props.token}/>
                         </div>
                    </form>
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                    </ul>
                </div>
            </nav>
        </>
    );
}
