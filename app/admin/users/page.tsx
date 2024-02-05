 import {getUsers, login} from "../api/UserApi";
import CustomerTable from "../table/CustomerTable";

export default async function Home() {


    const data = await getUsers();
    console.log(data)
    return (
        <>
         <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-blue-950">
            <CustomerTable data={data} />
        </main>
         </>
    );
}

