import Image from "next/image";

import esquare from "@/assets/inicio/horizontal-azul.svg";
import { ChevronsDown } from "lucide-react";
import Botao from "./Botao";



export default function Inicio() {
  return (
    <section id="Inicio" className="h-screen w-full bg-bgHome flex justify-center">
      <div className="flex flex-col justify-between h-full">
        <div></div>

        {/* logo */}
        <Image src={esquare} alt="ESQUARE" className="mt-16" />

        {/* container */}
        <div className="flex flex-col items-center gap-32">

          {/* botao */}
          <Botao />

          {/* seta */}
          <ChevronsDown size={55} />

        </div>

      </div>
    </section>
  )
}
