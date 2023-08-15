import Image from "next/image";

import { ChevronsDown } from "lucide-react";
import esquare from "../assets/HORIZONTAL-AZUL.svg";
import whatsapp from "../assets/whatsapp.svg";


export default function Inicio() {
  return (
    <section id="Inicio" className="h-full bg-bgHome flex justify-center">
      <div className="flex flex-col justify-between h-full">
        <div></div>
        <Image src={esquare} alt="ESQUARE"  className="mt-16"/>
        <div className="flex flex-col items-center gap-32">
          <div className="w-96 h-14 bg-emerald-600 rounded-3xl flex items-center justify-center text-gray-50 font-bold text-xl cursor-pointer">
            SOLICITE UM ORÇAMENTO
          </div>
          <ChevronsDown size={55} className=""/>
        </div>

        <Image src={whatsapp} height={75} alt="whatsapp"
          className="fixed right-7 bottom-7 cursor-pointer" />
      </div>
    </section>
  )
}
