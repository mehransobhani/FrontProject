import {cookies} from "next/headers";

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
