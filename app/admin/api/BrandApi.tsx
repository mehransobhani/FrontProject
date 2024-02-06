
"use server"
import {revalidatePath} from "next/cache";

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
    console.log("BBB",brand);

    const response = await fetch("http://193.36.84.151/service/add-brand/",
        {
            method: "POST",
            headers: {
                'Origin':'http://193.36.84.151',
                'Content-type': 'application/json',
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjMyMTg2LCJpYXQiOjE3MDcyMjAxODYsImp0aSI6ImE0OTY1ZDQyOGI1ODQ2ODQ4NzcyZmQzZjczYWE3YTMwIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.DNNmD-SoIQczBeVdisgJZtfjklPNiBpthQ7uyRb1_eo'
            },
            body: JSON.stringify(
             {brand:brand}
            )

        }
    )
    revalidatePath("admin/brands");

    return response;

}
