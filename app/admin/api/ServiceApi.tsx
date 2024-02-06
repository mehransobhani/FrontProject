 export async function getServices() {
    const response = await fetch(process.env.api_base_url + "service/service-list",
        {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjQ3MzM2LCJpYXQiOjE3MDcyMzUzMzYsImp0aSI6Ijc4NDIwMmFiYWQ1NTQ1NGM5MWQ2MGRhNmNhYWZiOWQzIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ._XDqgl84F3poyhcaygg563OjbAtR04XUc8I3nol19Zo'
            }
        }
    )
    return response.json();
}


 export async function getServiceHistory(id:string|undefined) {
    const response = await fetch(process.env.api_base_url + "service/service-history/"+id,
        {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjQ3MzM2LCJpYXQiOjE3MDcyMzUzMzYsImp0aSI6Ijc4NDIwMmFiYWQ1NTQ1NGM5MWQ2MGRhNmNhYWZiOWQzIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ._XDqgl84F3poyhcaygg563OjbAtR04XUc8I3nol19Zo'
            }
        }
    )
    return response.json();
}
