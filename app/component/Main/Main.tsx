import Image from "next/image";
import file1 from "@/public/blog/1.jpg";
import file2 from "@/public/blog/2.jpg";
import file3 from "@/public/blog/3.jpg";
import file4 from "@/public/blog/4.gif";
import file5 from "@/public/blog/5.jpg";
import file6 from "@/public/blog/6.jpg";
import file7 from "@/public/blog/7.jpg";
import file8 from "@/public/blog/8.jpg";
import file9 from "@/public/blog/9.jpg";
import file10 from "@/public/blog/10.jpg";
import file11 from "@/public/blog/11.jpg";
import file12 from "@/public/blog/12.jpg";
import file13 from "@/public/blog/13.gif";
import file14 from "@/public/blog/14.jpg";
import file15 from "@/public/blog/15.jpg";
import file16 from "@/public/blog/16.jpg";
import file17 from "@/public/blog/17.jpg";
import file18 from "@/public/blog/18.jpg";

export default async function Main() {
    return (<>
        <main className={"my-5"}>
            <h1 className={"font-bold text-xl"}>
                تلویزیون به زبان ساده
            </h1>
            <>
                <div className={"text-gray-800 text-lg"}>
                    <span>بریم به ساده ترین حالت ممکن عملکرد تلویزیون رو توضیح بدم</span>
                    <p>خونه های قدیمی که پنجره های رنگی داشت رو یادتونه</p>
                    <p>
                        وقتی نور بهش تابیده میشد ، شیشه به هر رنگی که بود ، همون رنگ هم ازش خارج
                        میشد
                    </p>
                    <p className={"my-5"}>
                        <Image
                            src={file1}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>حالا دلیل علمی این قضیه چیه ؟</p>
                    <p>
                        نور سفید خورشید یا هر نور سفید مصنوعیه دیگه ای ، تمام نور های دیگه رو توی
                        خودش داره ( همون بحث تشکیل رنگین کمان تو مدرسه )
                    </p>
                    <p className={"my-5"}>
                        <Image
                            src={file2}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>
                        حالا وقتی نور به یه طلق یا شیشه ی رنگی تابیده میشه ، اون جسم شفاف رنگی مثل
                        یه فیلتر عمل میکنه و فقط رنگی رو از خودش عبور میده که هم طیف و همرنگ خودش
                        باشه
                        <br/>
                        به این دلیله که پشت شیشه ی سبز فقط رنگ سبز عبور میکنه
                    </p>
                    <p>حالا فرض کنیم یه تصویر خیلی ساده با همین طلق های شفاف درست کردیم</p>
                    <p className={"my-5"}>
                        <Image
                            src={file13}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>
                        اگه این تصویر رو جلوی نور خورشید بزاریم ، هر قسمت اون فقط نورهمرنگ و هم طیف
                        خودشو عبور میده
                    </p>
                    <p>
                        حالا شما فرض کن یه تصویر باجزئیات بیشتر با جسم شفافی مثل طلق درست کردی و از
                        پشت داری بهش نور میتابونی
                        <br/>
                        نتیجه این میشه که شما یک تصویر نورانی خلق کردی
                    </p>
                    <p>
                        <br/>
                        اتفاقا تا چند سال پیش تقریبا از همین روش توی سینماهامون استفاده میشد
                    </p>
                    <div className={"my-5"}>
                        <div className={"grid sm:grid-cols-2 gap-1"}>
                            <div className={"flex"}>

                                <Image
                                    src={file11}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>
                            <div className={"flex"}>
                                <Image
                                    src={file5}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>
                        </div>
                    </div>

                    <p>
                        طرز کارش هم اینطوری بود که با گذروندن عکس ها از جلوی یه منبع نور قوی باعث
                        میشد همون حالت فیلترینگ نور اتفاق بیافته ، در ادامه ی کار هم با استفاده از
                        چند تا عدسی قوی و حساب شده ، تصویر رو روی پرده به نمایش در می آوردن
                    </p>
                    <p>
                        چون سرعت نمایش تصاویر پشت سر هم زیاد بود ، چشم بیننده فریب میخورد و اون
                        تصویر ها رو بصورت پیوسته و یا فیلم میدید
                    </p>
                    <p>
                        توی تلویزیون های LCD و LED تمام این اتفاقات بصورت پیشرفته و الکترونیکی داره
                        اتفاق می افته
                    </p>
                    <p>
                        <br/>
                        جزء به جزء میریم جلو :
                    </p>
                    <p>
                        یادتونه درباره ی نوری که از پشت تابیده میشد صحبت کردیم
                        <br/>
                        توی تلویزیون ها ، ما به واحد تشکیل دهنده ی این نور بک لایت میگیم که توی
                        تلویزیون های ال سی دی از لامپ های فلورسنت و توی تلویزیون های ال ای دی از
                        لامپ ال ای دی استفاده شده
                    </p>
                    <div className={"my-10"}>
                        <div className={"grid sm:grid-cols-3 gap-1"}>
                            <div className={"flex"}>
                                <Image
                                    src={file18}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>
                            <div className={"flex"}>


                                <Image
                                    src={file7}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>


                            <div className={"flex"}>

                                <Image
                                    src={file10}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>
                        </div>
                        <p className={"text-center py-1 font-bold"}>لامپ های فلورسنت</p>

                    </div>

                    <div className={"mt-10"}>
                        <div className={"grid sm:grid-cols-2 gap-1"}>
                            <div className={"flex"}>

                                <Image
                                    src={file16}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>
                            <div className={"flex"}>

                                <Image
                                    src={file4}
                                    alt={"HomePageBanner"}
                                    width={100}
                                    height={100}
                                    layout={"responsive"}
                                />
                            </div>
                        </div>
                        <p className={"text-center py-1 font-bold"}>
                            لامپ های ال ای دی
                        </p>
                    </div>
                    <p>

                        <br/>( دلیل نامگذاری تلویزیون های ال ای دی هم همینا هستن )
                    </p>
                    <p>خب بربم سراغ اون طلق شفافه :</p>
                    <p>نمایشگر کریستال مایع یا LCD توی تلویزیون نقش همون طلق رو بازی میکنه</p>
                    <p>
                        ( تلویزیون های ال ای دی نسل قبل هم از صفحه نمایش ال سی دی استفاده میکردند )
                    </p>
                    <p>
                        صفحه نمایش از نقاط بسیار ریزی بنام پیکسل درست شده که میتونه به هر رنگی در
                        بیاد
                    </p>
                    <p>چجوری ؟ فقط با ترکیب سه رنگ اصلی قرمز و سبز وآبی که داخل خودش داره</p>

                    <div className={"my-5"}>
                        <Image
                            src={file8}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                        <p className={"text-center py-1 font-bold"}>
                            پیکسل
                        </p>
                    </div>
                    <div className={"my-5"}>
                        <Image
                            src={file17}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                        <p className={"text-center py-1 font-bold"}>
                            تصویر یک نشانگر از نمای نزدیک
                        </p>
                    </div>
                    <div className={"my-5"}>
                        <Image
                            src={file6}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                        <p className={"text-center py-1 font-bold"}>
                            تصویر چشم انسان از نمای نزدیک
                        </p>
                    </div>
                     <p>
                        حالا فرض کن که یک طلق شفاف داریم که میتونیم هر نقطه شو به هر رنگی که دلمون
                        میخواد دربیاریم
                    </p>
                    <p>
                        پس قادریم هر تصویری که بخوایم رو بسازیم
                        <br/>
                        عملکرد تلویزیون هم دقیقا به همین شکله که میاد تصویر های مختلف رو با سرعت
                        زیاد پشت سر هم تولید میکنه و به نمایش میزاره و چشم ما چون قادر نیست این حد
                        از تغیر رو درک کنه پس ما تصاویر ساخته شده ی تلویزیون رو به صورت فیلم و
                        پیوسته میبینیم
                    </p>

                    <p>
                        <b>سوال اصلی ؟</b>
                    </p>
                    <p>
                        کی این تصویر ها رو میسازه ؟؟؟؟
                    </p>
                    <p>
                        <b className={"text-sky-600"}>MAIN BOARD</b>
                    </p>
                    <p>برد اصلی</p>
                    <p className={"mb-5"}>
                        <Image
                            src={file12}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>
                        مین برد سیگنال رو از ورودی میگیره حالا چه آنتن باشه چه کابل hdmi باشه و
                        <br/>
                        سیگنال اون رو پردازش میکنه و حالا یه سیگنال صوت به سمت باند های تلویزیون و
                        یک سیگنال تصویر به سمت برد تصویر میفرسته
                    </p>
                    <p>
                        کنترل تمام ورودی و خروجی های صوت و تصویر به عهده ی برد مینه
                        <br/>
                        این برد فرمان های صادره از طرف کاربر ، مثل کم و زیاد کردن صدا از روی کنترل
                        یا خاموش وروشن کردن تلویزیون از روی دکمه ی تعبیه شده روی خود تلویزیون رو هم
                        بعهده داره
                        <br/>
                        وضیفه ی کنترل بک لایت هم باز بعهده ی همین قسمته
                        <br/>
                        در کل مین برد مغز اصلی دستگاهه و کل فعالیت های اونو کنترل میکنه
                    </p>
                    <p>

                        گفتیم میبن برد سیگنال های تصویر رو به سمت برد تصویر میفرسته !!!!
                    </p>
                    <p>
                        برد تصویر چیه ؟؟؟؟؟؟؟؟؟
                    </p>
                    <p>
                        <b className={"text-sky-600"}>T-CON</b>
                    </p>
                    <p>
                        <Image
                            src={file15}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>این برد به برد تصویر معروفه</p>
                    <p>
                        حالا کارش چیه : میاد سیگنالی که از برد اصلی دریافت کرده و تفسیر و بررسی
                        میکنه که بتونه سیگنالی درست کنه که برای صفحه نمایش قابل اجرا باشه ، یعنی
                        بعبارتی مترجم بین برد اصلی و صفحه نمایش ماست
                    </p>
                    <p>البته ولتاژ های مورد نیاز صفحه نمایش هم توی همین قسمت تشکیل میشه</p>
                    <p>
                        خود همین برد میاد به دونه به دونه ی پیکسل های صفحه نمایش دستور میده ؟؟؟؟؟؟؟
                    </p>
                    <p>
                        نه
                    </p>
                    <p>اینجاست که برد آدرس قاطی ماجرا میشه</p>
                    <p>
                        <b className={"text-sky-600"}>ADDRESS BOARD</b>
                    </p>
                    <p>برد آدرس</p>

                    <p className={"my-5"}>
                        <Image
                            src={file3}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>
                        این برد که مستقیم به خود صفحه نمایش متصل شده وظیفه اینوداره که از برد تصویر
                        دستورات رو بگیره و وظیفه ی تک تک پیکسل ها رو بهشون برسونه

                        سوال آخر ؟
                    </p>
                    <p>برق مورد نیاز تمام این قسمت ها رو کی تامین میکنه ؟؟؟؟؟؟؟</p>
                    <p>
                        <b className={"text-sky-600"}>POWER BOARD</b>
                    </p>
                    <p>برد تغذیه</p>
                    <p className={"my-5"}>
                        <Image
                            src={file14}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>
                    <p>
                        این قسمت که شکل و شمایلش هم معلومه ، برق متناوب شهر رو میگیره و اونو به
                        ولتاژ های ثابت ضعیف تر و متناسب با نیاز هر قسمت از تلویزیون تبدیل میکنه

                    </p>

                    <p>
                        توی این مقاله سعی کردیم کارکرد تلویزیون و قسمت های مختلف اونو به ساده ترین
                        حالت ممکن بیان کنیم که برای هر قشری قابل درک وفهم باشه
                        <br/>
                        امیدوارم لذت برده باشین
                    </p>


                    <p className={"my-5"}>
                        <Image
                            src={file9}
                            alt={"HomePageBanner"}
                            width={100}
                            height={100}
                            layout={"responsive"}
                        />
                    </p>

                </div>

            </>
        </main>

    </>)
}
