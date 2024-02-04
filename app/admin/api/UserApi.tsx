
export async function getUsers() {
    const response = await fetch(process.env.api_base_url + "user/users-list",
        {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NzExODM2LCJpYXQiOjE3MDY2OTk4MzYsImp0aSI6ImViZjc0N2FhNDg4ZTQwZmY4MjNlYjkzYTEyNjRiOTE2IiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.6ULP7G7uabFpx61ZmX-0i4uckaAHrWMdmxsl6D2HKmw"
            }
        }
    )
    return response.json();

}

interface userPass { username: string, password: "string" }
export async function login() {
    const response = await fetch(process.env.api_base_url + "user/login",
        {
            method: "POST",
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify({
                phone:"09121111111",
                password:"qwerty123@@"
            })

        }
    )
    return response.json();

}
