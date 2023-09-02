import ValoresItemSectionValores from '@/components/SectionValores/ValoresItem'

import etica from '@/assets/SectionValores/etica.svg'
import excelencia from '@/assets/SectionValores/excelencia.svg'
import inovaçao from '@/assets/SectionValores/inovaçao.svg'
import satisfaction from '@/assets/SectionValores/satisfaction.svg'

export default function SectionValores() {
  return (
    <section
      id="Valores"
      className="m-20 flex h-[46rem] w-full flex-col items-center justify-center bg-azulPetrolio 2xl:mb-20 2xl:h-full"
    >
      {/* Titulo */}
      <h1 className="mt-8 flex items-center justify-center text-center text-4xl font-black uppercase text-gray-50 2xl:mb-10">
        Porque escolher a Esquare
      </h1>

      {/* container */}
      <div className="relative flex h-full w-full flex-wrap items-center justify-evenly 2xl:justify-center 2xl:gap-3">
        <ValoresItemSectionValores
          titulo={'Satisfação do Cliente'}
          imagem={satisfaction}
          texto={
            'Estamos sempre pensando no melhor para nossos clientes, de forma que eles tenham a melhor experiência com os nossos serviços.'
          }
        />
        <ValoresItemSectionValores
          titulo={'Excelência'}
          imagem={excelencia}
          texto={
            'Buscando sempre trazer a melhor experiência e satisfação para nossos clientes, nossos métodos de trabalho estão em constante avaliação à procura de melhorias para entregar os melhores projetos para nossos clientes.'
          }
        />
        <ValoresItemSectionValores
          titulo={'Ética'}
          imagem={etica}
          texto={
            'Temos como base do nosso trabalho o respeito para com os preceitos morais da nossa sociedade, bem como todas as leis que regem o nosso país, em especial às normas relativas à projetos e soluções de engenharia.'
          }
        />
        <ValoresItemSectionValores
          titulo={'Inovação'}
          imagem={inovaçao}
          texto={
            'Nossa empresa está em constante evolução, em busca de inovações no mercado da engenharia civil para melhorar cada vez mais nossos serviços.'
          }
        />
      </div>
    </section>
  )
}
