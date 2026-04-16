import { Suspense } from "react";
import SectionBlog from "@/components/SectionBlog";
import SectionContatos from "@/components/SectionContatos";
import SectionInicio from "@/components/SectionInicio";
import SectionProjetos from "@/components/SectionProjetos";
import SectionQuemSomos from "@/components/SectionQuemSomos";
import SectionServiços from "@/components/SectionServiços";
import SectionValores from "@/components/SectionValores";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="animate__fadeIn animate__animated flex h-full min-h-screen flex-col items-center justify-center overflow-hidden">
      <SectionInicio />
      <SectionQuemSomos />
      <Suspense fallback={<Loading />}>
        <SectionServiços />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SectionProjetos />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SectionBlog />
      </Suspense>
      <SectionContatos />
    </div>
  );
}
