import Image from "next/image";

import { ChevronsDown } from "lucide-react";
import esquare from "../assets/HORIZONTAL-AZUL.svg";
import whatsapp from "../assets/whatsapp.svg";


export default function Pagina() {
  return (
    <div className="h-full bg-bgHome flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <Image src={esquare} alt="ESQUARE" />
        <div className="flex flex-col items-center justify-between gap-32">
          <div className="w-96 h-14 bg-emerald-600 rounded-3xl flex items-center justify-center text-gray-50 font-bold text-xl cursor-pointer">
            SOLICITE UM ORÇAMENTO
          </div>
          <ChevronsDown size={55} />
        </div>

        <Image src={whatsapp} height={75} alt="whatsapp"
          className="fixed right-7 bottom-7 cursor-pointer" />
      </div>
    </div>
  )
}
