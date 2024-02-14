"use server"
import {cookies} from "next/headers";

export async function getCookie() {
    let token:string|undefined=cookies().get("access-token")?.value;
    return token;

}
