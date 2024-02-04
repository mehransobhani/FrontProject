import { useEffect } from "react"; 
import BrandTable from "../table/BrandTable";

export default async function Home() {

   
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-blue-950">
            <BrandTable />

        </main>
    );
}