import whatsapp from "@/assets/inicio/whatsapp.svg";

import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Inicio from "@/components/Inicio";
import NavBar from "@/components/NavBar";
import Projetos from "@/components/Projetos";
import QuemSomos from "@/components/QuemSomos";
import Serviços from "@/components/Serviços";
import Valores from "@/components/Valores";
import Image from "next/image";



export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={whatsapp} height={75} alt="whatsapp"
        className="fixed right-7 bottom-7 cursor-pointer z-10" />

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
