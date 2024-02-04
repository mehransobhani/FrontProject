
export async function getUsers() {
    const response = await fetch(process.env.api_base_url + "user/users-list",
        {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MDc0MTg4LCJpYXQiOjE3MDcwNjIxODgsImp0aSI6IjU4NjA4ZTc1M2ViZTRkYzNhZjdmOTIxODA1NjY2OGE3IiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.vfjb8HqVR1cJ7ptpKpD_kou3MoYeNkaxw2dEamNTdYM'
            }
        }
    )
    return response.json();
}

export async function addUser(formData:{first_name:FormDataEntryValue|null,last_name:FormDataEntryValue|null,phone:FormDataEntryValue|null,password:FormDataEntryValue|null , password_confirmation:FormDataEntryValue|null}) {
    const response = await fetch("http://193.36.84.151/user/signup/",
        {
            method:"POST",
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MDc0MTg4LCJpYXQiOjE3MDcwNjIxODgsImp0aSI6IjU4NjA4ZTc1M2ViZTRkYzNhZjdmOTIxODA1NjY2OGE3IiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.vfjb8HqVR1cJ7ptpKpD_kou3MoYeNkaxw2dEamNTdYM'
            },
            body: JSON.stringify(
               {formData}
            )
        }
    )
    return response.json();
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
