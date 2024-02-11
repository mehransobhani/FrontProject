import Image from "next/image";
import ContactUsForm from "../component/ContactUsForm/ContactUsForm";
import MainLayout from "@/app/Layout/MainLayout";
import { brandList } from "../api/BrandsApi";

export default async function Home() {
        const brands=await brandList(); 
        
  return (<>
          <MainLayout>
              <ContactUsForm brands={brands} />
          </MainLayout>
  </>
  );
}
