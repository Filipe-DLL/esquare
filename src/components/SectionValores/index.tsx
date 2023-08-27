import ValoresItemSectionValores from '@/components/SectionValores/ValoresItem'

import cliente from '@/assets/SectionValores/cliente.jpg'
import etica from '@/assets/SectionValores/etica.jpg'
import excelencia from '@/assets/SectionValores/excelencia.jpg'
import inovaçao from '@/assets/SectionValores/inovaçao.jpg'

export default function SectionValores() {
  return (
    <section
      id="Valores"
      className="relative m-20 flex h-[46rem] w-full flex-col items-center bg-azulPetrolio 2xl:mb-20 2xl:h-full"
    >
      {/* Titulo */}
      <h1 className="mt-8 flex items-center justify-center text-3xl font-black uppercase text-gray-50">
        Porque escolher a Esquare
      </h1>

      {/* listra */}
      <div className="absolute bottom-[54%] h-2 w-4/6 rounded-full bg-gray-50 opacity-100 2xl:opacity-0"></div>

      {/* container */}
      <div className="relative flex h-full w-full flex-wrap items-center justify-evenly 2xl:justify-center 2xl:gap-3">
        <ValoresItemSectionValores
          titulo={'Satisfação do Cliente'}
          imagem={cliente}
          texto={
            'Estamos sempre pensando no melhor para nossos clientes, de forma que eles tenham a melhor experiência com os nossos serviços.'
          }
        />
        <ValoresItemSectionValores
          titulo={'Excelência'}
          imagem={excelencia}
          texto={
            ' Buscando sempre trazer a melhor experiência e satisfação para nossos clientes, nossos métodos de trabalho estão em constante avaliação à procura de melhorias para entregar os melhores projetos para nossos clientes.'
          }
        />
        <ValoresItemSectionValores
          titulo={'Ética'}
          imagem={etica}
          texto={
            ' Temos como base do nosso trabalho o respeito para com os preceitos morais da nossa sociedade, bem como todas as leis que regem o nosso país, em especial às normas relativas à projetos e soluções de engenharia.'
          }
        />
        <ValoresItemSectionValores
          titulo={'Inovação'}
          imagem={inovaçao}
          texto={
            ' Nossa empresa está em constante evolução, em busca de inovações no mercado da engenharia civil para melhorar cada vez mais nossos serviços.'
          }
        />
      </div>
    </section>
  )
}
