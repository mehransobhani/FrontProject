
export async function getBrands() {
    const response = await fetch(process.env.api_base_url+ "service/show-brand",
        {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MDc0MTg4LCJpYXQiOjE3MDcwNjIxODgsImp0aSI6IjU4NjA4ZTc1M2ViZTRkYzNhZjdmOTIxODA1NjY2OGE3IiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.vfjb8HqVR1cJ7ptpKpD_kou3MoYeNkaxw2dEamNTdYM'
            }
        }
    )
    return response.json();
}

export async function addBrand(brand:FormDataEntryValue|null) {
    console.log("BBB",brand);
    
    const response = await fetch("http://193.36.84.151/service/add-brand",
        {
            method: "POST",
            headers: {
                'Origin':'http://193.36.84.151',
                'Content-type': 'application/json',
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MDc0MTg4LCJpYXQiOjE3MDcwNjIxODgsImp0aSI6IjU4NjA4ZTc1M2ViZTRkYzNhZjdmOTIxODA1NjY2OGE3IiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.vfjb8HqVR1cJ7ptpKpD_kou3MoYeNkaxw2dEamNTdYM'
            },
            body: JSON.stringify(
             {brand:brand}
            )

        }
    )
    return response.json();

}
