export async function brandList(){
    const response:Response = await fetch(process.env.api_base_url+ "service/brands-list/",{cache:"no-cache"})

return response.json();
}
