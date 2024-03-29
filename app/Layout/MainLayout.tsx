import type { Metadata } from "next";
import "../globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font";
import Footer from "@/app/component/Footer/Footer";
import Nav from "../component/Nav/Nav";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const myFont: NextFont = localFont({ src: '../../public/font/Vazirmatn-Regular.woff2' })
export const metadata: Metadata = {
    title: "تعمیر تلوزیون",
    description: "Generated by create next app",
};

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {



    return (
   <>
        <div className="  mb-[70px] sm:mb-[150px]">
            <Nav />
        </div>
        <ToastContainer  rtl={true}  />
        {children}
        <Footer />
   </>
    );
}
