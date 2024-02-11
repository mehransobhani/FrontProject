export async function registerService(fName: FormDataEntryValue | null, lname: FormDataEntryValue | null, phone: FormDataEntryValue | null, brand: FormDataEntryValue | null, address: FormDataEntryValue | null) {
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