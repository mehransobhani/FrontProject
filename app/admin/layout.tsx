import type { Metadata } from "next";
 import "../globals.css";
import AdminNavbar from "@/app/admin/Navbar/AdminNavbar";
import Sidebar from "@/app/admin/Sidebar/Sidebar";
import localFont from 'next/font/local'
import {NextFont} from "next/dist/compiled/@next/font";
import {cookies} from "next/headers";
import {me} from "@/app/admin/api/UserApi";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

const myFont:NextFont = localFont({ src: '../../public/font/Vazirmatn-Regular.woff2' })

export  default async function AdminLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

  let token:string|undefined = cookies().get("access-token")?.value;
  let Me=await me(token);
  let role:string|undefined=Me?.admin_role;
  let name:string|undefined=Me?.first_name+" "+Me.last_name

 async function logout()
    {
     "use server"
     cookies().delete("access-token");
     redirect("/auth/login")
    }

    return (
        <html lang="en">
        <body className={[myFont.className, "bg-white"].join(" ")} style={{direction: "rtl"}}>
        <Sidebar role={role}  />
        <div className="relative md:mr-56 bg-blueGray-100">
            <AdminNavbar  logout={logout} name={name} token={token}/>
            <ToastContainer rtl={true} position={"top-center"}/>

            {children}
        </div>
        </body>
        </html>
    );
}
