
export async function getUsers() {
    const response = await fetch(process.env.api_base_url + "user/users-list",
        {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MTMyMjM4LCJpYXQiOjE3MDcxMjAyMzgsImp0aSI6IjU4MjcxMGQ2NGYxMzQ1MGRiYzBhMGQ2Y2I4OTFhNWVlIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.2l0UZxN_MFHd6LIHzJjyViyxatG7Zek77tZwKenSKpo'
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
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MTMyMjM4LCJpYXQiOjE3MDcxMjAyMzgsImp0aSI6IjU4MjcxMGQ2NGYxMzQ1MGRiYzBhMGQ2Y2I4OTFhNWVlIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.2l0UZxN_MFHd6LIHzJjyViyxatG7Zek77tZwKenSKpo'
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
