export default function Footer() {
    return (
        <>
            <footer className="bg-sky-600 text-white">
                <div className="container px-6 py-12 mx-auto">
                    <div className="mx-auto max-w-xs  sm:max-w-6xl px-4 sm:px-6 lg:px-8 ">
                        <div
                            className="grid grid-cols-1 gap-24 mt-12 sm:grid-cols-2 md:grid-cols-3 ">
                            <div className={"text-center"}>
                                <h3 className="text-xl pb-4 font-bold text-white   text-center border-yellow-500 border-dashed border-b">آدرس
                                    دفتر مرکزی</h3>

                                <div className="flex flex-col items-center mt-4 space-y-4">
                              <span className={"text-white text-md font-bold "}>
 تهران، ونک، خیابان خدامی، نبش خیابان آفتاب، پلاک 3 ساختمان مادیران
                              </span>
                                </div>
                            </div>

                            <div className={"text-center"}>
                                <h3 className="text-xl pb-4 font-bold text-white   text-center border-yellow-500 border-dashed border-b">آدرس
                                    نمایندگی</h3>

                                <div className="flex flex-col items-center mt-4 space-y-4">
                              <span className={"text-white text-md font-bold "}>
  انتهای خط نازی آباد - خیابان بهمنیار - مجتمع اداری تجاری مُفَرَح - فاز ۲ - طبقه ۲ - واحد ۱۳

                              </span>
                                </div>
                            </div>

                            <div className={"text-center"}>
                                <h3 className="text-xl pb-4 font-bold text-white   text-center border-yellow-500 border-dashed border-b">
                                    تلفن نمایندگی
                                </h3>

                                <div className="flex flex-col items-center mt-4 space-y-4">
                                    <span className="text-md font-bold text-white">۰۲۱-۹۱۳۰۹۵۷۵</span>

                                    <span className="text-md font-bold text-white">۰۲۱-۹۱۳۰۳۶۶۶</span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
