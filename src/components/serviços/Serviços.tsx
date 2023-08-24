import Serviço from '@/components/serviços/Serviço'

import arquitetonico from '@/assets/serviços/arquitetonico.jpg'

export default function Serviços() {
  return (
    <section
      id="Serviços"
      className="flex h-full w-5/6 flex-col items-center justify-center"
    >
      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-3xl font-black uppercase">
        Nossos Serviços
      </h1>

      {/* container */}
      <div className="flex flex-wrap items-start justify-center gap-8 p-10">
        <Serviço titulo="Projeto arquitetônico" imagem={arquitetonico} />
        <Serviço titulo="Projeto estrutural" imagem={arquitetonico} />
        <Serviço titulo="Projetos Hidrossanitário" imagem={arquitetonico} />
        <Serviço titulo="Projeto Elétrico" imagem={arquitetonico} />
        <Serviço
          titulo="Prevenção e Combate à Incêndio (PPCI)"
          imagem={arquitetonico}
        />
        <Serviço titulo="Orçamento Caixa" imagem={arquitetonico} />
      </div>
    </section>
  )
}
