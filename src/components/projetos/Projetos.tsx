import Image from 'next/image'

import projeto1 from '@/assets/projetos/projeto1.jpg'
import projeto2 from '@/assets/projetos/projeto2.jpg'

import { ArrowRight } from 'lucide-react'

export default function Projetos() {
  return (
    <section
      id="Projetos"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-3xl font-black uppercase">
        Alguns dos nossos projetos
      </h1>

      {/* container */}
      <div className="flex w-4/6 flex-col items-center justify-center gap-10 py-8">
        <div className="flex items-center justify-center gap-16">
          <Image
            src={projeto1}
            alt=""
            width={400}
            className="rounded-3xl shadow-default"
          />

          <div className="flex flex-col items-start justify-center gap-6">
            <h2 className="font-extrabold">Titulo do Projeto</h2>
            <p className="text-base font-medium text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
              nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
              accusantium magnam voluptate quis iure.
            </p>
            <h3 className="flex cursor-pointer flex-row font-semibold text-sky-600">
              Learm More <ArrowRight className="text-sky-600" />
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-16">
          <div className="flex flex-col items-start justify-center gap-6">
            <h2 className="font-extrabold">Titulo do Projeto</h2>
            <p className="text-base font-medium text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
              nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
              accusantium magnam voluptate quis iure.
            </p>
            <h3 className="flex cursor-pointer flex-row font-semibold text-sky-600">
              Learm More <ArrowRight className="text-sky-600" />
            </h3>
          </div>

          <Image
            src={projeto2}
            alt=""
            width={400}
            className="rounded-3xl shadow-default"
          />
        </div>
      </div>
    </section>
  )
}
