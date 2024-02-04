import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/app/component/Footer/Footer";
import ContactUsForm from "@/app/component/ContactUsForm/ContactUsForm";
import Nav from "@/app/component/Nav/Nav";
import Admin from "@/app/Admin/page";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="fa">
      <body className={inter.className} style={{direction:"rtl"}}>
      <Footer />
      {children}
      </body>
    </html>
  );
}
