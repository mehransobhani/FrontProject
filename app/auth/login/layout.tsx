import type { Metadata } from "next";
import "../../globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font"; 


const myFont: NextFont = localFont({ src: '../../../public/font/Vazirmatn-Regular.woff2' })
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AuthLayout({
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
