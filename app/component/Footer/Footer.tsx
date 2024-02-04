export default function Footer() {
    return (
        <>
            <footer className="bg-white">
                <div className="container px-6 py-12 mx-auto">
                    <div
                        className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                        <div className={"text-center"}>
                            <h3 className="text-sm font-bold text-gray-500   text-center">درباره ما</h3>

                            <div className="flex flex-col items-center mt-4 space-y-4">
                              <span className={"text-gray-600"}>
                                  سرویس تی وی شرکتی با سابقه در زمینه تعمیر انواع تلویزیون ایکس ویژن می باشد. همچنین دارای سابقه طولانی همکاری با شرکت ایکس ویژن می باشد. هدف ما همیشه ارائه بهترین خدمات به مشتریان عزیز می باشد.
                              </span>
                            </div>
                        </div>

                        <div className={"text-center"}>
                            <h3 className="text-sm font-medium text-gray-500 ">شعبه مرکزی</h3>

                            <div className="flex flex-col items-center mt-4 space-y-4">
                                <a href="#"
                                   className="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">About
                                    us</a>
                            </div>
                        </div>

                        <div className={"text-center"}>
                            <h3 className="text-sm font-medium text-gray-500 ">شعبه کرج</h3>

                            <div className="flex flex-col items-center mt-4 space-y-4">
                                <a href="#"
                                   className="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">Blog</a>
                            </div>
                        </div>

                        <div className={"text-center"}>
                            <h3 className="text-sm font-medium text-gray-500 ">نماد اعتماد</h3>

                            <div className="flex flex-col items-center mt-4 space-y-4">
                                <span
                                    className="text-gray-700 transition-colors duration-200  hover:underline hover:text-blue-600">
                                    Startups</span>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 md:my-10 "/>
                </div>
            </footer>
        </>)
}
