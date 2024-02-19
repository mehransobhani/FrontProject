import "./globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font"; 

const myFont: NextFont = localFont({ src: '../public/font/Vazirmatn-Regular.woff2' })


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
        <body className={[myFont.className, "bg-white"].join(" ")} style={{direction: "rtl"}}>
                {children}
            </body>
        </html>
    );
}
