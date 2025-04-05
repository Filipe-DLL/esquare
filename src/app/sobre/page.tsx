// src/app/sobre/page.tsx
import React from 'react'
import Image from 'next/image'

import IMG_1 from '@/assets/sobre/img_1.jpg'
import IMG_2 from '@/assets/sobre/img_2.jpg'
import IMG_3 from '@/assets/sobre/img_3.jpg'
import IMG_4 from '@/assets/sobre/IMG_4.jpg'


export default function QuemSomos() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src={IMG_1}
          alt="Engenharia e Projetos"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Sobre Nós
          </h1>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12 flex-1">
        {/* Seção de Introdução */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-azulIndigo mb-4">
              Bem-vindo à ESQUARE Engenharia & Projetos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa missão é encontrar as melhores soluções de engenharia para garantir a segurança e a tranquilidade dos nossos clientes. Com uma equipe experiente e dedicada, transformamos desafios em oportunidades de inovação.
            </p>
          </div>
        </section>

        {/* Seção História */}
        <section className="mb-12">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full md:w-1/2 flex flex-row justify-around md:flex-col-reverse gap-3">
              <Image
                src={IMG_2}
                alt="Nossa História"
                height={400}
                className="rounded-lg shadow-lg object-cover xl:w-6/12 md:w-full"
              />
              <Image
                src={IMG_3}
                alt="Equipe ESQUARE"
                height={400}
                className="rounded-lg shadow-lg object-cover xl:w-6/12 md:w-full"
              />
            </div>
            <div className="md:w-11/12 text-center">
              <h3 className="text-2xl font-bold text-azulIndigo mb-4">
                Nossa História
              </h3>
              <p className="text-lg text-gray-700 ">
              A Esquare nasceu no polo do cariri cearense com o objetivo de fornecer os melhores serviços relacionados a engenharia civil na região, tendo sempre o foco na satisfação do cliente em busca do sonho de construir sua casa própria ou seu empreendimento.
                Desde a nossa fundação, a ESQUARE tem se destacado pela inovação e excelência. Nossa trajetória é marcada por projetos de sucesso e pela constante busca por soluções que superem as expectativas dos nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Missão, Visão e Valores */}
        <section className="mb-12">
          <div className="flex gap-8 items-center justify-center sm:flex-col-reverse">
            <div className="order-2 md:order-1 text-center">
              <h3 className="text-2xl font-bold text-azulIndigo mb-4">
                Missão, Visão e Valores
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li>
                  <span className="font-semibold text-azulIndigo">Missão:</span> Oferecer soluções inovadoras e seguras que superem as expectativas dos clientes.
                </li>
                <li>
                  <span className="font-semibold text-azulIndigo">Visão:</span> Ser referência nacional em engenharia, reconhecida pela qualidade e inovação.
                </li>
                <li>
                  <span className="font-semibold text-azulIndigo">Valores:</span> Integridade, inovação, comprometimento, responsabilidade e excelência.
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={IMG_4}
                alt="Equipe ESQUARE"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
