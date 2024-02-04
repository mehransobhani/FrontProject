import { useEffect } from "react";
 import CreateUserModal from "../modal/CreateUserModal";
import CustomerTable from "../table/CustomerTable";
import ServiceTable from "../table/ServiceTable";
import { getUsers } from "../api/UserApi";
import { getServices } from "../api/ServiceApi";

export default async function Home() {

    const data = await getServices();

    console.log("data", data);
    console.log("data");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-blue-950">
            <ServiceTable data={data} />
        </main>
    );
}