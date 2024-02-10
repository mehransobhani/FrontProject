"use server"
import { revalidatePath } from "next/cache";

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
    else
        return response;
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
        return response;
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
        return response;
}

interface userPass { username: string, password: "string" }
export async function login() {
    const response = await fetch(process.env.api_base_url + "user/login/",
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                phone: "09121111111",
                password: "qwerty123@@"
            })

        }
    )
    return response.json();

}
