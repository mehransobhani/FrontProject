import {UserCircleIcon} from "@heroicons/react/24/outline";
import {loginApi} from "@/app/auth/api/LoginApi";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function login
({
     params,
     searchParams,
 }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
})
{

    async function login(e: FormData) {
        "use server"
        let username: FormDataEntryValue | null = e.get("phone");
        let password: FormDataEntryValue | null = e.get("password");

        let data = await loginApi(username, password);
        if (data.access) {
            cookies().set("access-token", data.access);
            redirect("/admin/services");
        } else {
            redirect("/auth/login?find=0");
        }
    }

    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-slate-100 bg-cover bg-no-repeat"
                 style={{backgroundImage: "url('../../public/icon/login_bg.jpg')"}}>

                <div
                    className="rounded-xl bg-gray-100 bg-opacity-80 px-16 border py-10 shadow-2xl backdrop-blur-md max-sm:px-8">

                    <div className="text-black">

                        <div className="mb-8 flex flex-col items-center">
                            <div className={"w-12 "}>
                                <UserCircleIcon/>
                            </div>
                            <h1 className="mb-2 text-2xl">پنل مدیریت</h1>
                            <span className=" font-bold text-gray-500">برای ورود نام و کلمه عبور خود را وارد کنید</span>
                            { searchParams.find && searchParams.find==0 &&

                                <div
                                    className="p-2 mb-3 text-sm text-red-800 rounded-lg bg-red-50  "
                                    role="alert">
                                    نام کاربری یا کلمه عبور اشتباه است
                                </div>
                            }
                        </div>
                        <form action={login}>
                            <div className="mb-4 text-lg">
                                <input
                                    className="rounded-3xl border-none bg-indigo-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-800 shadow-lg outline-none backdrop-blur-md"
                                    type="text" name="phone" placeholder="نام کاربری"/>
                            </div>

                            <div className="mb-4 text-lg">
                                <input
                                    className="rounded-3xl border-none bg-indigo-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-800 shadow-lg outline-none backdrop-blur-md"
                                    type="Password" name="password" placeholder="کلمه عبور"/>
                            </div>

                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button type="submit"
                                        className="rounded-3xl bg-indigo-700 bg-opacity-50 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-indigo-600">ورود
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>)
}
