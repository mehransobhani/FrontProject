 import BrandTable from "../table/BrandTable";
import {addBrand, getBrands} from "../api/BrandApi";
 import {cookies} from "next/headers";
 import type {Metadata} from "next";

 export const metadata: Metadata = {
     title: "مدیریت برند ها",
     description: "مدیریت برند ها",
     robots:"noindex,nofollow"
 };

export default async function Home() {


    const token:string|undefined=cookies().get("access-token")?.value;
    let data = await getBrands(token);

     return (
         <main className="flex min-h-screen flex-col items-center justify-between py-12 px-1 bg-slate-50 text-blue-950">
             <BrandTable data={data} token={token}/>
         </main>
     );
}
