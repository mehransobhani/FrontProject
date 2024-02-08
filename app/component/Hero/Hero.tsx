import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Hero() {
    return (
        <>
            <div className="relative flex h-16 items-center justify-between">
                <div className="text-center w-full">
                    <span className="text-md font-bold text-gray-500">
                        ما همراه همیشگی شما به هنگام خرابی تلویزیون تان هستیم. همین حالا درخواست تعمیرات خود را با اطمینان خاطر ثبت کنید!
                    </span>
                </div>
            </div>
            <div className="bg-yellow-300 p-4 rounded-xl relative flex h-16 items-center justify-center w-64 mx-auto">
                <div className="flex  items-center gap-4">
                    <span className="text-xl font-bold text-gray-500">۰۹۲۱-۹۱۳۰۳۶۶۶</span>
                    <div className=" w-8 h-8 rounded-full justify-center flex  items-center">
                        <PhoneIcon className="h-6 w-6 text-black justify-center items-center" />
                    </div>
                </div>
            </div>
        </>
    )
}
