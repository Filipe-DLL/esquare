import Item from '@/components/valores/Item'

import cliente from '@/assets/valores/cliente.jpg'
import etica from '@/assets/valores/etica.jpg'
import excelencia from '@/assets/valores/excelencia.jpg'
import inovaçao from '@/assets/valores/inovaçao.jpg'

export default function Valores() {
  return (
    <section
      id="Valores"
      className="relative m-20 flex h-[46rem] w-full flex-col items-center bg-azulPetrolio 2xl:h-full 2xl:mb-20"
    >
      {/* Titulo */}
      <h1 className="mt-8 flex items-center justify-center text-3xl font-black uppercase text-gray-50">
        Porque escolher a Esquare
      </h1>

      {/* listra */}
        <div
          className="absolute bottom-[54%] h-2 w-4/6 rounded-full bg-gray-50 opacity-100 2xl:opacity-0">
        </div>

      {/* container */}
      <div className="relative flex h-full items-center justify-evenly w-full flex-wrap 2xl:gap-3 2xl:justify-center">


        <Item
          titulo={'Satisfação do Cliente'}
          imagem={cliente}
          texto={
            'Estamos sempre pensando no melhor para nossos clientes, de forma que eles tenham a melhor experiência com os nossos serviços.'
          }
        />
        <Item
          titulo={'Excelência'}
          imagem={excelencia}
          texto={
            ' Buscando sempre trazer a melhor experiência e satisfação para nossos clientes, nossos métodos de trabalho estão em constante avaliação à procura de melhorias para entregar os melhores projetos para nossos clientes.'
          }
        />
        <Item
          titulo={'Ética'}
          imagem={etica}
          texto={
            ' Temos como base do nosso trabalho o respeito para com os preceitos morais da nossa sociedade, bem como todas as leis que regem o nosso país, em especial às normas relativas à projetos e soluções de engenharia.'
          }
        />
        <Item
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
