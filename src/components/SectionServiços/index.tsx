import ServiçoItem from './ServiçoItem'
import TabsServiço from './Tabs'

import arquitetonico from '@/assets/SectionServiços/arquitetonico.jpg'

export default function SectionServiços() {
  return (
    <section
      id="Serviços"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-center text-4xl font-black uppercase text-azulPetrolio 2lg:text-azulIndigo">
        Nossos Serviços
      </h1>

      {/* container */}
      <div className="flex flex-wrap items-start justify-center gap-8 p-10 2lg:hidden">
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

      {/* tabs */}
      <TabsServiço />
    </section>
  )
}
