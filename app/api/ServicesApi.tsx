export async function registerService(fName: FormDataEntryValue |string| null, lname: FormDataEntryValue|string | null, phone: FormDataEntryValue |string| null, brand: FormDataEntryValue|string | null, address: FormDataEntryValue |string| null) {
    const response = await fetch(process.env.api_base_url + "service/create-service/",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    first_name: fName,
                    last_name: lname,
                    phone: phone,
                    address: address,
                    brand: brand,
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
