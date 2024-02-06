 import BrandTable from "../table/BrandTable";
import {addBrand, getBrands} from "../api/BrandApi";
 import {cookies} from "next/headers";
 import {revalidatePath} from "next/cache";

export default async function Home() {


    const token:string|undefined=cookies().get("access-token")?.value;
    let data = await getBrands(token);
    console.log("DATA IS ",data)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-blue-950">
            <BrandTable data={data}   />
        </main>
    );
}
