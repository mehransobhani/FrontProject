import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font";
import Footer from "@/app/component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";


const myFont: NextFont = localFont({ src: '../public/font/Vazirmatn-Regular.woff2' })


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
            <body className={[myFont.className, "bg-white"].join(" ")} style={{ direction: "rtl" }}>
                {children}
            </body>
        </html>
    );
}
