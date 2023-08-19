import Image from "next/image";

import esquare from "@/assets/inicio/horizontal-azul.svg";
import { Instagram, Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer id="Footer" className="h-80 w-full mt-20 p-8 flex flex-col items-center border-t-[1.25rem] border-azulIndigo bg-zinc-300">

      {/* container */}
      <div className="flex items-start justify-center gap-12">

        {/* ESQUARE */}
        <div className="flex flex-col gap-4" >
          <Image src={esquare} alt="ESQUARE" width={200} />
          <p className="w-60 text-justify font-medium">A ESQUARE tem como missão encontrar as melhores soluções de engenharia para proporcionar segurança e tranquilidade para os nossos clientes.</p>
        </div>

        {/* Nossos Serviços */}
        <div className="">
          <h2 className="font-extrabold text-xl mb-8 pt-2">
            Nossos Serviços
          </h2>
          <ul className="list-disc pl-6 font-medium">
            <li>Projeto arquitetônico</li>
            <li>Projeto estrutural</li>
            <li>Projetos Hidrossanitário</li>
            <li>Projeto Elétrico</li>
            <li>Prevenção e Combate à Incêndio<br/>(PPCI)</li>
            <li>Orçamento Caixa</li>
          </ul>
        </div>

        {/* Contatos */}
        <div className="">
          <h2 className="font-extrabold text-xl mb-8 pt-2">
            Contatos
          </h2>
          <div className="flex  flex-col gap-2 font-medium">

            <div className="flex items-center gap-4">
              <Mail size={20} />
              <h2 className="text-base">esquareengenharia@gmail.com</h2>
            </div>

            <div className="flex items-center gap-4">
              <Instagram size={20} />
              <h2 className="text-base">@esquareengenharia</h2>
            </div>

            <div className="flex items-center gap-4">
              <PhoneCall size={20} />
              <h2 className="text-base">(88) 98888-8888</h2>
            </div>

          </div>
        </div>

        <div className="">
          <h2 className="font-extrabold text-xl mb-8 pt-2">
            Nossos Serviços
          </h2>
          <p className="font-medium">Rua Nome da Rua, Nº 888,<br/>
              Bairro - Cidade - CE.</p>
        </div>

      </div>

    </footer>
  )
}
