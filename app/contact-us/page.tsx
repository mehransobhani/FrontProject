import Image from "next/image";
import ContactUsForm from "../component/ContactUsForm/ContactUsForm";
import MainLayout from "@/app/Layout/MainLayout";

export default function Home() {
  return (<>
          <MainLayout>
  <ContactUsForm />
          </MainLayout>
  </>
  );
}
