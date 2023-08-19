import Image from "next/image";

import whatsapp from "@/assets/inicio/whatsapp.svg";

import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Inicio from "@/components/inicio/Inicio";
import Projetos from "@/components/projetos/Projetos";
import Serviços from "@/components/serviços/Serviços";
import QuemSomos from "@/components/sobreNos/QuemSomos";
import Valores from "@/components/valores/Valores";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">

      <Link href={'/zapzap'}>
        <Image src={whatsapp} height={75} alt="Solicite um orçamento via WhatsApp!"
          className="fixed right-7 bottom-7 cursor-pointer z-10" />
      </Link>

      <NavBar />
      <Inicio />
      <QuemSomos />
      <Serviços />
      <Projetos />
      <Valores />
      <Contato />
      <Footer />

    </div>
  )
}
