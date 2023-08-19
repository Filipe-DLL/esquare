import Image from "next/image";

import esquare from "@/assets/inicio/horizontal-azul.svg";
import Botao from "@/components/Botao";
import { ChevronsDown } from "lucide-react";



export default function Inicio() {
  return (
    <section id="Inicio" className="h-screen w-full bg-bgHome flex justify-center">
      <div className="flex flex-col justify-between h-full">
        <div></div>

        <Image src={esquare} alt="ESQUARE" />


        <div className="flex flex-col items-center gap-32 mb-16">
          <Botao />
          <ChevronsDown size={55} />
        </div>

      </div>
    </section>
  )
}
