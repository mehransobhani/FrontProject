import "./globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font"; 
import Script from "next/script";

const myFont: NextFont = localFont({ src: '../public/font/Vazirmatn-Regular.woff2' })


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
 <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TD6RTBJBVW"></Script>
        <Script   src={"/js/gtag.js"}></Script>
        <body className={[myFont.className, "bg-white"].join(" ")} style={{direction: "rtl"}}>
                {children}
            </body>
        </html>
    );
}
