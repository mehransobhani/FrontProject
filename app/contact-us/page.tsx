import ContactUsForm from "../component/ContactUsForm/ContactUsForm";
import MainLayout from "@/app/Layout/MainLayout";
import { brandList } from "../api/BrandsApi";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "تماس با ما",
    description: "تماس با ما و درخواست ارسال تعمیرکار",
    twitter:{
        title:"تماس با ما",
        description: "تماس با ما و درخواست ارسال تعمیرکار",
    },
    openGraph:{
        title:"تماس با ما",
        description: "تماس با ما و درخواست ارسال تعمیرکار",
        type:"website",
        phoneNumbers:["۰۲۱-۹۱۳۰۳۶۶۶","۰۲۱-۹۱۳۰۹۵۷۵"],
        countryName:"iran",
    },
};

export default async function Home() {
        const brands=await brandList();

  return (<>
          <MainLayout>
              <ContactUsForm brands={brands} />
          </MainLayout>
  </>
  );
}
