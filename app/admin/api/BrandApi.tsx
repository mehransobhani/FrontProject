
export async function getBrands() {
    const response = await fetch(process.env.api_base_url+ "service/show-brand",
        {
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MTMyMjM4LCJpYXQiOjE3MDcxMjAyMzgsImp0aSI6IjU4MjcxMGQ2NGYxMzQ1MGRiYzBhMGQ2Y2I4OTFhNWVlIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.2l0UZxN_MFHd6LIHzJjyViyxatG7Zek77tZwKenSKpo'
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
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MTMyMjM4LCJpYXQiOjE3MDcxMjAyMzgsImp0aSI6IjU4MjcxMGQ2NGYxMzQ1MGRiYzBhMGQ2Y2I4OTFhNWVlIiwidXNlcl9pZCI6IjE2MDg0ZGE2LTU0ZmQtNGVlMy04NzhmLTFlM2NmM2E5MDJjZSIsInBob25lIjoiMDkxMjExMTExMTEiLCJwYXNzd29yZCI6InBia2RmMl9zaGEyNTYkNzIwMDAwJEFnMTJ5TVRzaEU1UEo3QVRVWG5UeVEkNGZtbmpMWWJKQTdGK1pPSE1TUTJ1dGJXVFlGK0FzTUdKMmVOYlRXQU5PZz0ifQ.2l0UZxN_MFHd6LIHzJjyViyxatG7Zek77tZwKenSKpo'
            },
            body: JSON.stringify(
             {brand:brand}
            )

        }
    )
    return response.json();

}
