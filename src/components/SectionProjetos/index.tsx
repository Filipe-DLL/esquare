import Image from 'next/image'

import projeto1 from '@/assets/SectionProjetos/projeto1.jpg'
import projeto2 from '@/assets/SectionProjetos/projeto2.jpg'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SectionProjetos() {
  return (
    <section
      id="Projetos"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-center text-4xl font-black uppercase">
        Alguns dos nossos projetos
      </h1>

      {/* container */}
      <div className="mt-6 flex w-4/6 flex-col items-center justify-center gap-10 py-8">
        <div className="flex items-center justify-center gap-16 lg:flex-col">
          <Image
            src={projeto1}
            alt=""
            className="w-96 rounded-3xl shadow-md xl:w-80 lg:w-96"
          />

          <div className="flex flex-col items-start justify-center gap-6">
            <h2 className="font-extrabold">Titulo do Projeto</h2>
            <p className="text-base font-medium text-black lg:text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
              nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
              accusantium magnam voluptate quis iure.
            </p>
            <Link href={'/projetos'}>
              <div className="group flex items-center justify-center text-sky-600  ">
                <h3 className="flex cursor-pointer flex-row font-semibold transition-all ease-in-out group-hover:text-sky-500 group-hover:opacity-90">
                  Veja mais projetos
                </h3>
                <ArrowRight className="text-sky-600 transition-all ease-in-out group-hover:text-sky-500 group-hover:opacity-90" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-16 lg:flex-col-reverse">
          <div className="flex flex-col items-start justify-center gap-6">
            <h2 className="font-extrabold">Titulo do Projeto</h2>
            <p className="text-base font-medium text-black lg:text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
              nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
              accusantium magnam voluptate quis iure.
            </p>
            <Link href={'/projetos'}>
              <div className="group flex items-center justify-center text-sky-600  ">
                <h3 className="flex cursor-pointer flex-row font-semibold transition-all ease-in-out group-hover:text-sky-500 group-hover:opacity-90">
                  Veja mais projetos
                </h3>
                <ArrowRight className="text-sky-600 transition-all ease-in-out group-hover:text-sky-500 group-hover:opacity-90" />
              </div>
            </Link>
          </div>

          <Image
            src={projeto2}
            alt=""
            className="w-96 rounded-3xl shadow-md xl:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  )
}
