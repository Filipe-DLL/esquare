import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { projectData } from '@/data/projectData'



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

      <div className="mt-6 flex w-4/6 flex-col items-center justify-center gap-10 py-8 sm:w-11/12">
        {
          projectData.slice(1, 3).map((item, key) => (
            <div key={key} className={`flex items-center justify-center gap-16 lg:flex-col ${key === 1 && "flex-row-reverse"}`}>
              <Image
                src={item.imagens[0]}
                alt=""
                width={500}
                height={500}
                className="object-fill w-[400px] h-[300px] rounded-3xl shadow-md xl:w-80 lg:w-96"
              />

              <div className="flex flex-col items-start justify-center gap-6">
                <h2 className="font-extrabold">{item.titulo}</h2>
                <p className="text-base font-medium text-black lg:text-justify">
                  {item.descrição}
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
          ))
        }
      </div>

    </section>
  )
}
