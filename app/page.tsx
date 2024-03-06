import Image from "next/image";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import MainLayout from "@/app/Layout/MainLayout";
import Head from "next/head";
import type { Metadata } from "next";
import file1 from "@/public/blog/1.jpg"
import Main from "@/app/component/Main/Main";

export const metadata: Metadata = {
   title: "تعمیر تلوزیون",
   description: "همین حالا درخواست پشتیبانی تلویزیون های ایکس ویژن، تی سی ال و سونی خود را ثبت نمایید",
   twitter: {
      title: "تعمیر تلوزیون",
      description: "همین حالا درخواست پشتیبانی تلویزیون های ایکس ویژن، تی سی ال و سونی خود را ثبت نمایید",
   },

   openGraph: {
      title: "تعمیر تلوزیون",
      description: "همین حالا درخواست پشتیبانی تلویزیون های ایکس ویژن، تی سی ال و سونی خود را ثبت نمایید",
      type: "website",
      phoneNumbers: ["۰۲۱-۹۱۳۰۳۶۶۶", "۰۲۱-۹۱۳۰۹۵۷۵"],
      countryName: "iran",
   },
};
export default function Home() {
   return (
      <>
         <MainLayout>
            <div className="w-full bg-white py-5 text-black">
               <div className="mx-auto   2xl:max-w-[70%] px-4 lg:px-8 ">
                  <Hero />

                  <div className="flex-grow p-6 overflow-auto my-5 ">
                     <div className="grid grid-cols-5 gap-6">

                        <div className=" col-span-5 lg:col-span-4 px-2">
                           <span className="text-md font-bold text-gray-500">
تعمیر تلوزیون در تمام نقاط تهران با مراجعه مستقیم تکنسین یا ارسال توسط راننده مجرب شرکت
                           </span>
                           <div className="flex flex-1 items-center justify-center my-5">

                              <div className="hidden sm:mx-6 sm:block ">
                                 <div className="flex  items-center gap-4">
                                    <a
                                       className={"text-xl font-bold text-red-600"}
                                       href="tel:02191309575"
                                    >
                                       ۰۲۱-۹۱۳۰۹۵۷۵
                                    </a>


                                 </div>
                              </div>
                              <div className="hidden sm:mx-6 sm:block">
                                 <div className="flex  items-center gap-4">
                                    <a
                                       className={"text-xl font-bold text-red-600"}
                                       href="tel:02191303666"
                                    >
                                       ۰۲۱-۹۱۳۰۳۶۶۶
                                    </a>

                                 </div>
                              </div>
                           </div>
                           <div className="my-10">
                              <h2 className="text-2xl font-bold text-sky-600">تعمیر تلویزیون های مادیران و ال جی کلیه مناطق تهران</h2>
                              <p className="text-lg font-bold text-gray-500">در صورت بروز هر مشکلی در تلویزیون خود، اعم از مشکلات مربوط به تصویر، صدا و پنل تلویزیون می توانید با ما تماس بگیرید و درخواست خود را برای اعزام کارشناسان مربوطه به محل را ثبت کنید</p>
                              <p className="text-lg font-bold text-gray-500">مناطق :</p>

 <p className="text-lg font-bold text-gray-500">

  1  : اوین  , زعفرانیه  , ولنجک  , دربند  , جماران  , دزاشیب  , نیاوران  , دارآباد  , باغ فردوس  , تجریش  , قیطریه  , چیذر  , ازگل  , سوهانک  , شهید محلاتی  , اقدسیه  , الهیه – فرشته  , اندرزگو  , بلوار ارتش  , پارک وی  , نوبنیاد  , دیباجی  , کامرانیه  <br/>
  2  : سعادت آباد  , کوهسار  , پونک  ,  چوب تراش  , صادقیه  , شهرآرا  , کوی نصر  , گیشا  , شهرک آزمایش  , تهران ویلا  , برق آلستوم  , طرشت  , تیموری  , شادمهر  , بلواردریا  , 
شهرک قدس  , سهرک غرب  , آسمانها  , درختی  , بهبودی  , جلال آل احمد  , ستارخان  , شادمان  , مرزداران  <br/>
 3  : ونک  , زرگنده  , سید خندان  , دروس 
 , قبا  , قلهک  , اختیاریه  , پاسداران  , جردن  , جلفا  , جلفا  , شیخ بهایی  , ظفر  , ملاصدرا  , میرداماد  <br/>
 4  : کوهک  , مجیدیه و شمس آباد , شیان و لویزان  , علم و صنعت  , نارمک  , تهرانپارس  , حکیمیه  , قنات کوثر  , بنی هاشم  , پلیس  , دلاوران  , رسالت  , سراج  , فرجام  , 
هروی    <br/>
 5  : شهران  , شهرزیبا  , باغ فیض  , حصارک  , پرواز  , سازمان برنامه  , سازمان آب  , اباذر  , فردوس  , اکباتان  , آپادانا  , جنت آباد  ,
 آیت الله کاشانی  , ایران زمین  , بلوار فردوس  , پیامبر  , سردار جنگل  , شهران <br/>
  6  : نجات اللهی  , عباس آباد  , قزل قلعه  , گلها  , گاندی , یوسف آباد  , آرژانتین  , اسکندری  , امیر آباد  , زرتشت  , میدان انقلاب اسلامی  , میدان ولیعصر  , کارگر  , کریم خان  <br/>
  7 : نظام آباد , خواجه نصیر  , خواجه نظام  , کاج  , سهروردی  , ارامنه  , قصر  , آپادانا  , امام حسین  , شریعتی  , شهید مدنی  , مفتح   , هفت تیر  <br/>
 8 : هفت حوض  , فدک  , نارمک  , لشگر   , وحیدیه  , تسلیحات  , جشنواره  , سبلان  <br/>
  9  : استادمعین  , شمشیری  , مهرآباد , سی متری جی  <br/>
   10 : بریانک  , هفت چنار  , سلسبیل  , آزادی  , امام خمینی , دامپزشکی  , قصرالدشت  , نواب <br/>
    11 : امیریه ( فرهنگ )  , جمهوری  , حر  , راه آهن  , هلال احمر  , پاستور  , حسن آباد  , ولیعصر  <br/>
   12 : بهارستان  , فردوسی  , پامنار  , قیام  , دروازه شمیران  , امین حضور  , خراسان  , مولوی <br/>
  13  : صفا , نیروی هوایی  , پیروزی  , امامت  , تهران نو  , دماوند  , نیرو هوایی <br/>
  14  : چهارصد دستگاه  , صد دستگاه  , شیوا  , نبی اکرم (ص) , شهرابی ( قیام )  , پرستار  , سیزده آبان  , ابوذر  , تاکسیرانی  , خاوران  , آهنگ  , قصر فیروزه  , اندرزگو  , پاسدارگمنام  , فلاح  , نبرد  , هفده شهریور   <br/>
   15  : شوش  , اتابک  , کیانشهر  , مشیریه  , افسریه , مسعودیه  <br/>
    16  : جوادیه  , نازی آباد  , علی آباد  , یاخچی آباد  , رجایی  , یاخچی آباد  <br/>
    17  : آذری  , امامزاده حسن(ع)  , یافت آباد  , سجاد   <br/>
    18  : صاحب الزمان  , شاد آباد  , خلیج فارس  , شمس آباد  , شهرک ولیعصر   <br/>
    19  : شهرک شریعتی  , خانی آباد نو  , شکوفه  , نعمت آباد  , دولت خواه  , عبدل آباد   <br/>
 20  : جوانمرد  , دولت اباد  , استخر    <br/>
     21 : شهرک دریا  , تهرانسر  , شهرک پاسداران  , شهرک آزادی  , شهرک فرهنگیان  , شهرک استقلال  , شهرک دانشگاه  , چیتگر  , ویلا شهر  , وردآورد  , شهرک غزالی  , شهرک شهرداری  , شهرک ۲۲بهمن    <br/>
     22 : شهرک دانشگاه شریف  , دهکده المپیک  , زیبا دشت  , گلستان  , شریف  , امید – دژبان  , شهید باقری , آزادشهر  , پیکان شهر    <br/> 

                              </p>
                           </div>
                           <Main />


                        </div>
                        <div className="col-span-5 lg:col-span-1  ">
                           <div className="text-center border-red-600    border-2  rounded-xl py-2">

                              <a
                                 className={"text-2xl font-bold text-red-600"}
                                 href="tel:02191303666"
                              >
                                 ۰۲۱-۹۱۳۰۳۶۶۶
                              </a>

                           </div>
                           <div className="text-center border-red-600 my-5    border-2  rounded-xl py-2">

                              <a
                                 className={"text-2xl font-bold text-red-600"}
                                 href="tel:02191309575"
                              >
                                 ۰۲۱-۹۱۳۰۹۵۷۵
                              </a>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </MainLayout>
      </>
   )
      ;
}

