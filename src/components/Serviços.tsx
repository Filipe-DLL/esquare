import Image from "next/image";

import arquitetonico from "@/assets/setviços/arquitetonico.jpg";

export default function Serviços() {
  return (
    <section id="Serviços" className="h-full w-5/6 flex flex-col items-center justify-center">

      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-3xl font-black uppercase">Serviços</h1>

      {/* container */}
      <div className="flex flex-wrap items-end justify-between p-10 gap-8">

        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="max-w-[400px] text-center text-2xl font-bold p-5">
            Projeto arquitetônico
          </h2>
          <Image src={arquitetonico} alt="" width={400}
            className="rounded-3xl drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="max-w-[400px] text-center text-2xl font-bold p-5">
            Projeto estrutural
          </h2>
          <Image src={arquitetonico} alt="" width={400}
            className="rounded-3xl drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="max-w-[400px] text-center text-2xl font-bold p-5">
            Projetos Hidrossanitário
          </h2>
          <Image src={arquitetonico} alt="" width={400}
            className="rounded-3xl drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="max-w-[400px] text-center text-2xl font-bold p-5">
            Projeto Elétrico
          </h2>
          <Image src={arquitetonico} alt="" width={400}
            className="rounded-3xl drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="max-w-[400px] text-center text-2xl font-bold p-5">
            Prevenção e Combate à Incêndio (PPCI)
          </h2>
          <Image src={arquitetonico} alt="" width={400}
            className="rounded-3xl drop-shadow-md" />
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="max-w-[400px] text-center text-2xl font-bold p-5">
            Orçamento Caixa
          </h2>
          <Image src={arquitetonico} alt="" width={400}
            className="rounded-3xl drop-shadow-md" />
        </div>

      </div>

    </section>
  )
}
