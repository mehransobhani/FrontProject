
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
