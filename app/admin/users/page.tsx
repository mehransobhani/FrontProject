 import {getUsers, login} from "../api/UserApi";
import CustomerTable from "../table/CustomerTable";
 import {cookies} from "next/headers";

export default async function Home() {

    const token:string|undefined=cookies().get("access-token")?.value;
    console.log(token)
    const data = await getUsers(token);
    console.log(data)
    return (
        <>
         <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-blue-950">
            <CustomerTable data={data} />
        </main>
         </>
    );
}
