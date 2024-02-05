import {cookies} from "next/headers";

export async function loginApi(phone:FormDataEntryValue|null,password:FormDataEntryValue|null) {
    const response = await fetch(process.env.api_base_url + "user/login/",
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                phone: phone,
                password: password
            })

        }
    )
    return response.json();
}

export async function me() {
    const response = await fetch(process.env.api_base_url + "user/me/",
        {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                "Authorization": 'Bearer '+ cookies().get("access-token")?.value
            }
        }
    )
    return  response;
}
