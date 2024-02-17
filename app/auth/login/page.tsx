import {UserCircleIcon} from "@heroicons/react/24/outline";
import {loginApi} from "@/app/auth/api/LoginApi";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {toast} from "react-toastify";
import LoginForm from "@/app/auth/login/LoginForm";

export default async function login() {
    async function setCookie(cookie: string) {
        "use server"
        cookies().set("access-token", cookie);
        redirect("/admin/services");
    }

    return (
        <>
            <LoginForm setCookie={setCookie}/>
        </>)
}
