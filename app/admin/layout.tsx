import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminNavbar from "@/app/admin/Navbar/AdminNavbar";
import Sidebar from "@/app/admin/Sidebar/Sidebar";
import localFont from 'next/font/local'
import {NextFont} from "next/dist/compiled/@next/font";


const myFont:NextFont = localFont({ src: '../../public/font/Vazirmatn-Regular.woff2' })
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function AdminLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={myFont.className} style={{direction:"rtl"}}>
        <Sidebar />
        <div className="relative md:mr-64 bg-blueGray-100">
            <AdminNavbar />
            {children}
        </div>
        </body>
        </html>
    );
}
