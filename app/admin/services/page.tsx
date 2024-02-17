import ServiceTable from "../table/ServiceTable";
import { getServices } from "../api/ServiceApi";
import {cookies} from "next/headers";

export default async function Home() {

    const token:string|undefined=cookies().get("access-token")?.value;
    const data = await getServices(token);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-12 px-1 bg-slate-50 text-blue-950">
            <ServiceTable data={data} token={token}/>

        </main>
    );
}
