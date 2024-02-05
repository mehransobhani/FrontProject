 import BrandTable from "../table/BrandTable";
import { getBrands } from "../api/BrandApi";

export default async function Home() {

    const data = await getBrands();
    console.log(data);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-blue-950">
            <BrandTable data={data} />
        </main>
    );
}
