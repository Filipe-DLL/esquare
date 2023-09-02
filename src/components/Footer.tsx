import Image from 'next/image'

import esquare from '@/assets/footer/HORIZONTAL - CINZA 3.svg'
import { Instagram, Mail, PhoneCall } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="mt-20 flex h-80 w-full flex-col items-center justify-center bg-azulPetrolio p-8 text-gray-50 lg:h-full md:p-2"
    >
      {/* container */}
      <div className="flex items-start justify-center gap-24 xl:gap-8 lg:flex-wrap md:w-full md:flex-col md:items-center">
        {/* ESQUARE */}
        <div className="flex flex-col gap-4 xl:w-5/12 lg:items-center md:w-full">
          <Image src={esquare} alt="ESQUARE" width={240} />
          <p className="w-60 text-justify font-medium">
            A ESQUARE tem como missão encontrar as melhores soluções de
            engenharia para proporcionar segurança e tranquilidade para os
            nossos clientes.
          </p>
        </div>

        {/* Nossos Serviços */}
        <div className="flex flex-col xl:w-5/12 lg:items-center md:w-full">
          <h2 className="mb-8 text-xl font-extrabold">Nossos Serviços</h2>
          <ul className="list-disc pl-6 font-medium">
            <li>Projeto arquitetônico</li>
            <li>Projeto estrutural</li>
            <li>Projetos Hidrossanitário</li>
            <li>Projeto Elétrico</li>
            <li>
              Prevenção e Combate à <br />
              Incêndio (PPCI)
            </li>
            <li>Orçamento Caixa</li>
          </ul>
        </div>

        {/* Contatos */}
        <div className="flex flex-col xl:w-5/12 lg:items-center md:w-full">
          <h2 className="mb-8 text-xl font-extrabold">Contatos</h2>
          <div className="flex  flex-col gap-2 font-medium">
            <div className="flex items-center gap-4 2sm:flex-col">
              <Mail size={20} />
              <h2 className="text-base">esquareengenharia@gmail.com</h2>
            </div>

            <div className="flex items-center gap-4 2sm:flex-col">
              <Instagram size={20} />
              <h2 className="text-base">@esquareengenharia</h2>
            </div>

            <div className="flex items-center gap-4 2sm:flex-col">
              <PhoneCall size={20} />
              <h2 className="text-base">(88) 98888-8888</h2>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col xl:w-5/12 lg:items-center">
          <h2 className="mb-8 text-xl font-extrabold">Endereço</h2>
          <p className="font-medium">
            Rua Nome da Rua, Nº 888,
            <br />
            Bairro - Cidade - CE.
          </p>
        </div>
      </div>
    </footer>
  )
}
