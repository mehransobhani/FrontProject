import Image from "next/image";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";

export default function Home() {
   return (
      <>
         <div className="w-full bg-white py-5 text-black">
            <div className="mx-auto   2xl:max-w-[70%] px-4 lg:px-8 ">
               <Hero />

               <div className="flex-grow p-6 overflow-auto my-5 ">
                  <div className="grid grid-cols-5 gap-6">

                     <div className=" col-span-5 lg:col-span-4 px-2">
                        <span className="text-md font-bold text-gray-500">
                           تعمبیر تلویزیون ایکس ویژن جنوب تهران در مجموعه   سرویس، تی وی  آماده ارائه خدمات تعمیر تلویزیون، نصب و راه اندازی آن را دارد.
                        </span>

                        <div className="flex flex-1 items-center justify-center my-5">

                           <div className="hidden sm:mx-6 sm:block ">
                              <div className="flex  items-center gap-4">
                                 <span className="text-xl font-bold text-red-600">۰۹۲۱-۹۱۳۰۹۵۷۵</span>
                                  
                              </div>
                           </div>
                           <div className="hidden sm:mx-6 sm:block">
                              <div className="flex  items-center gap-4">
                                 <span className="text-xl font-bold text-red-600">۰۹۲۱-۹۱۳۰۳۶۶۶</span>
                                  
                              </div>
                           </div>
                        </div>

                        <div className="my-10">
                           <h2  className="text-2xl font-bold text-sky-600">تعمیر  تلویزیون ایکس ویژن جنوب تهران</h2>
                           <p  className="text-lg font-bold text-gray-500">در صورت بروز هر مشکلی در تلویزیون خود، اعم از مشکلات مربوط به تصویر، صدا و پنل تلویزیون می توانید با ما تماس بگیرید و درخواست خود را برای اعزام کارشناسان مربوطه به محل را ثبت کنید</p>
                        </div>
                        <div className="my-10">
                           <h2  className="text-2xl font-bold text-sky-600">تعمیر  تلویزیون ایکس ویژن جنوب تهران</h2>
                           <p  className="text-lg font-bold text-gray-500">در صورت بروز هر مشکلی در تلویزیون خود، اعم از مشکلات مربوط به تصویر، صدا و پنل تلویزیون می توانید با ما تماس بگیرید و درخواست خود را برای اعزام کارشناسان مربوطه به محل را ثبت کنید</p>
                        </div>
                        <div className="my-10">
                           <h2  className="text-2xl font-bold text-sky-600">تعمیر  تلویزیون ایکس ویژن جنوب تهران</h2>
                           <p  className="text-lg font-bold text-gray-500">در صورت بروز هر مشکلی در تلویزیون خود، اعم از مشکلات مربوط به تصویر، صدا و پنل تلویزیون می توانید با ما تماس بگیرید و درخواست خود را برای اعزام کارشناسان مربوطه به محل را ثبت کنید</p>
                        </div>
                        
                     </div>
                     <div className="col-span-5 lg:col-span-1  ">
                        <div className="text-center border-red-600  border-dashed border-4  rounded-xl py-2">
                           <span className="text-2xl font-bold text-red-600">۰۹۲۱-۹۱۳۰۹۵۷۵</span>
                        </div>
                        <div className="text-center border-red-600 my-5  border-dashed border-4  rounded-xl py-2">
                           <span className="text-2xl font-bold text-red-600">۰۹۲۱-۹۱۳۰۹۵۷۵</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </>
   );
}
