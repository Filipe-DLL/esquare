import ServiçoItem from '@/components/SectionServiços/ServiçoItem'

import arquitetonico from '@/assets/serviços/arquitetonico.jpg'

export default function SectionServiços() {
  return (
    <section
      id="Serviços"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >

      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-3xl text-azulPetrolio font-black uppercase">
        Nossos Serviços
      </h1>

      {/* container */}
      <div className="flex flex-wrap items-start justify-center gap-8 p-10">
        <ServiçoItem titulo="Projeto arquitetônico" imagem={arquitetonico} />
        <ServiçoItem titulo="Projeto estrutural" imagem={arquitetonico} />
        <ServiçoItem titulo="Projetos Hidrossanitário" imagem={arquitetonico} />
        <ServiçoItem titulo="Projeto Elétrico" imagem={arquitetonico} />
        <ServiçoItem
          titulo={`Prevenção e Combate à Incêndio (PPCI)`}
          imagem={arquitetonico}
        />
        <ServiçoItem titulo="Orçamento Caixa" imagem={arquitetonico} />
      </div>

    </section>
  )
}
