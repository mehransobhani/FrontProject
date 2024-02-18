 import {getUsers} from "../api/UserApi";
import CustomerTable from "../table/CustomerTable";
 import {cookies} from "next/headers";
 import type {Metadata} from "next";

 export const metadata: Metadata = {
     title: "مدیریت کاربران",
     description: "مدیریت کاربران",
     robots:"noindex,nofollow"
 };
export default async function Home() {

    const token:string|undefined=cookies().get("access-token")?.value;
     const data = await getUsers(token);
     return (
        <>
            <main
                className="flex min-h-screen flex-col items-center justify-between py-12 px-1 bg-slate-50 text-blue-950">
                <CustomerTable data={data} token={token}/>
            </main>
        </>
     );
}

