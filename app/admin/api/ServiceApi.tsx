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

export async function updateService(id:string|undefined,status:string|undefined,description:string|undefined,token:string|undefined) {
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
        return response;
}
