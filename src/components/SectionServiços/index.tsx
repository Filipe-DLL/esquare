import ServiçoItem from '@/components/SectionServiços/ServiçoItem'
import TabsServiço from '@/components/SectionServiços/Tabs'

import Orçamento from '@/assets/SectionServiços/Orçamento.jpg'
import PPCI from '@/assets/SectionServiços/Prevenção-e-Combate-a-Incêndio-(PPCI).jpg'
import Eletrico from '@/assets/SectionServiços/Projeto-Elétrico.jpg'
import Arquitetonico from '@/assets/SectionServiços/Projeto-arquitetônico.jpg'
import Estrutural from '@/assets/SectionServiços/Projeto-estrutural.jpg'
import Hidrossanitário from '@/assets/SectionServiços/Projetos-Hidrossanitário.png'

export default function SectionServiços() {
  return (
    <section
      id="Serviços"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-center text-4xl font-black uppercase text-azulIndigo">
        Nossos Serviços
      </h1>

      {/* tabs */}
      <TabsServiço />

      {/* container */}
      <div className="flex flex-wrap items-start justify-center gap-8 p-10 2lg:hidden">
        <ServiçoItem titulo="Projeto Arquitetônico" imagem={Arquitetonico} />
        <ServiçoItem titulo="Projeto Estrutural" imagem={Estrutural} />
        <ServiçoItem titulo="Projeto Elétrico" imagem={Eletrico} />
        <ServiçoItem
          titulo="Projeto Hidrossanitário"
          imagem={Hidrossanitário}
        />
        <ServiçoItem
          titulo={`Prevenção e Combate à Incêndio (PPCI)`}
          imagem={PPCI}
        />
        <ServiçoItem titulo="Orçamento Para Financiamento" imagem={Orçamento} />
      </div>
    </section>
  )
}
