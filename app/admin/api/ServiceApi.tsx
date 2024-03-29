"use server"
import {revalidatePath} from "next/cache";

export async function getServices(token:string|undefined) {
    const response = await fetch(process.env.api_base_url + "service/service-list",
        {
            headers: {
                "Authorization": 'Bearer '+token
            }
        })
    return response.json();
}

export async function getServicesPagination(page:number,token:string|undefined) {
    const response = await fetch(process.env.api_base_url + "service/service-list/?page="+page,
        {
            headers: {
                "Authorization": 'Bearer '+token
            }
        })
    return response.json();
}

 export async function getServiceHistory(id:string|undefined,token:string|undefined) {
    const response = await fetch(process.env.api_base_url + "service/service-history/"+id,
        {
            headers: {
                "Authorization": 'Bearer '+token
            }
        }
    )
    return response.json();
}

export async function updateService(id:string|undefined,status:FormDataEntryValue|null,description:FormDataEntryValue|null,token:string|undefined) {
    const response = await fetch(process.env.api_base_url + "service/service-update/"+id+"/",
        {
            method:'POST',
            body: JSON.stringify(
                {
                    status:status,
                    description:description,
                }
            ),
            headers: {
                "Content-Type": "application/json",

                "Authorization": 'Bearer '+token
            }
        }
    )
    if(response.status==201)
     revalidatePath("/admin/services")
    else
        throw new Error("error");
}
