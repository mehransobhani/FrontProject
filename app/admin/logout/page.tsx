"use server"
import { cookies } from "next/headers"; 

export default async function page() {

    async function logout() {
        "use server"
        cookies().delete("access-token");
        console.log("token Removed");
        
    } 
}