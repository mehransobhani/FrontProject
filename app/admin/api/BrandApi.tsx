
 export async function getBrands(token:string|undefined) {
    const response = await fetch(process.env.api_base_url+ "service/show-brand",
        {
            headers: {
                "Authorization": 'Bearer '+token
            }
        }
    )
    return response.json();
}

export async function addBrand(brand:FormDataEntryValue|null , token:string|undefined) {

    const response:Response = await fetch(process.env.api_base_url+ "service/add-brand/",
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                "Authorization": 'Bearer '+token
            },
            body: JSON.stringify(
             {brand:brand}
            )

        }
    )
     // revalidatePath("admin/brands");

    return response;

}


export async function editBrand(id:string|null , brand:string|null , token:string|undefined) {

    const response:Response = await fetch(process.env.api_base_url+ "service/edit-brand/"+id+"/",
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                "Authorization": 'Bearer '+token
            },
            body: JSON.stringify(
             {brand:brand}
            )

        }
    )
     // revalidatePath("admin/brands");

    return response;

}