export default function ContactUsForm() {
    return (
        <>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true">

                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        تماس باما و درخواست ارسال تعمیرکار
                    </h2>

                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                        <div className="sm:col-span-2">
                            <label htmlFor="company"
                                   className="block text-sm font-semibold leading-6 text-black">
                                نام و نام خانوادگی
                                <span className={"text-red-500 px-2"}>*</span>

                            </label>

                            <div className="mt-2.5">
                            <input type="text" name="company" id="company" autoComplete="organization"
                                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset items-center ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company"
                                   className="block text-sm font-semibold leading-6 text-black">
                                شماره موبایل
                                <span className={"text-red-500 px-2"}>*</span>
                            </label>
                            <div className="mt-2.5">
                            <input type="text" name="company" id="company" autoComplete="organization"
                                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset items-center ring-blue-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company"
                                   className="block text-sm font-semibold leading-6 text-black">آدرس
                                <span className={"text-red-500 px-2"}>*</span>

                            </label>
                            <div className="mt-2.5">
                            <input type="text" name="company" id="company" autoComplete="organization"
                                       className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset items-center ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                توضیحات خود را بنویسید:
                                <span className={"text-red-500 px-2"}>*</span>

                            </label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message"
                                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                     </div>
                    <div className="mt-10">
                        <button type="submit"
                                className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            ارسال
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
