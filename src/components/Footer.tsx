import Image from 'next/image'

import esquare from '@/assets/footer/HORIZONTAL - CINZA 3.svg'
import { Instagram, Mail, PhoneCall } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="mt-20 flex h-80 w-full flex-col items-center justify-center bg-azulPetrolio text-gray-50 p-8 lg:h-full"
    >
      {/* container */}
      <div className="flex items-start justify-center gap-24 lg:flex-wrap lg:items-center md:flex-col md:w-full">
        {/* ESQUARE */}
        <div className="flex flex-col gap-4 lg:w-5/12 md:items-center">
          <Image src={esquare} alt="ESQUARE" width={240} />
          <p className="w-60 text-justify font-medium">
            A ESQUARE tem como missão encontrar as melhores soluções de
            engenharia para proporcionar segurança e tranquilidade para os
            nossos clientes.
          </p>
        </div>

        {/* Nossos Serviços */}
        <div className="lg:w-5/12 md:items-center">
          <h2 className="mb-8 text-xl font-extrabold">Nossos Serviços</h2>
          <ul className="list-disc pl-6 font-medium">
            <li>Projeto arquitetônico</li>
            <li>Projeto estrutural</li>
            <li>Projetos Hidrossanitário</li>
            <li>Projeto Elétrico</li>
            <li>
              Prevenção e Combate à <br/>
              Incêndio (PPCI)
          </li>
          <li>Orçamento Caixa</li>
        </ul>
      </div>

      {/* Contatos */}
      <div className="lg:w-5/12">
        <h2 className="mb-8 text-xl font-extrabold">Contatos</h2>
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

      <div className="lg:w-5/12">
        <h2 className="mb-8 text-xl font-extrabold">Nossos Serviços</h2>
        <p className="font-medium">
          Rua Nome da Rua, Nº 888,
          <br />
          Bairro - Cidade - CE.
        </p>
      </div>
    </div>
    </footer >
  )
}
