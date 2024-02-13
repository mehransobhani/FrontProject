"use server"
import { revalidatePath } from "next/cache";
import {cookies} from "next/headers";

export async function getUsers(token: string | undefined) {
    const response = await fetch(process.env.api_base_url + "user/users-list",
        {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        }
    )
    return response.json();
}

export async function addUser(first_name: FormDataEntryValue | null, last_name: FormDataEntryValue | null, phone: FormDataEntryValue | null, password: FormDataEntryValue | null, password_confirmation: FormDataEntryValue | null, token: string | undefined) {
    const response = await fetch(process.env.api_base_url + "user/signup/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify(
                {
                    first_name: first_name,
                    last_name: last_name,
                    phone: phone,
                    password: password,
                    password_confirmation: password_confirmation,
                }
            )
        }
    )
    if (response.status == 201)
        revalidatePath("/admin/users")
    else {
        throw new Error("error");
    }
}

export async function changeUserStatus(id: string | null, status: string | null, token: string | undefined) {
    const response = await fetch(process.env.api_base_url + "user/change-status/" + id + "/",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify(
                {
                    user_status: status,
                }
            )
        }
    )
    if (response.status == 200)
        revalidatePath("/admin/users")
    else
        throw new Error("error");
}


export async function resetPassword(id: string | null, token: string | undefined) {
    const response = await fetch(process.env.api_base_url + "user/reset-password/" + id + "/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
            },

        }
    )
    if (response.status == 200)
        revalidatePath("/admin/users")
    else
        throw new Error("error");
}



export async function changePassword(old_password: string | null, password: string | null, confirm_pass: string | null, token: string | undefined) {
     const response = await fetch(process.env.api_base_url + "user/change-password/",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
            },
            body: JSON.stringify({
                password:password,
                confirm_pass:confirm_pass,
                old_password:old_password,
            })
        }
    )

    return response.json()
}


export async function me(token:string|undefined="") {
    const response = await fetch(process.env.api_base_url + "user/me/",
        {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                "Authorization": 'Bearer '+ token
            }
        }
    )
    return  response.json();
}
