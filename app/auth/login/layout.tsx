import type { Metadata } from "next";
import "../../globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font";
import Nav from "@/app/component/Nav/Nav";


const myFont: NextFont = localFont({ src: '../../../public/font/Vazirmatn-Regular.woff2' })
export const metadata: Metadata = {
    title: "ورود",
    description: "ورود به پنل مدیریت",
};


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
        <body className={[myFont.className, "bg-white"].join(" ")} style={{direction: "rtl"}}>
        <div>
           <p></p>
        </div>
        {children}
        <footer></footer>
        </body>
        </html>
    );
}
