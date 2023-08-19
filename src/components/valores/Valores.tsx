import Iten from "@/components/valores/Iten";

import cliente from "@/assets/valores/cliente.jpg";
import etica from "@/assets/valores/etica.jpg";
import excelencia from "@/assets/valores/excelencia.jpg";
import inovaçao from "@/assets/valores/inovaçao.jpg";

export default function Valores() {
  return (
    <section id="Valores" className=" h-[46rem] w-full mt-20 flex flex-col items-center bg-azulPetrolio ">
      {/* Titulo */}
      <h1 className="m-8 flex items-center justify-center text-3xl font-black uppercase text-gray-50">Porque escolher a Esquare</h1>

      {/* container */}
      <div className="relative h-full flex items-center justify-center gap-14">

        {/* listra */}
        <div className={`absolute h-2 w-11/12 rounded-full bg-zinc-50  right-0 left-1/2 transform -translate-x-1/2 -translate-y-28 opacity-0 md:opacity-100`}>
        </div>

        <Iten titulo={"Satisfação do Cliente"} numero={1} texto={"Estamos sempre pensando no melhor para nossos clientes, de forma que eles tenham a melhor experiência com os nossos serviços."} imagem={cliente}
        />
        <Iten titulo={"Excelência"} numero={2} texto={" Buscando sempre trazer a melhor experiência e satisfação para nossos clientes, nossos métodos de trabalho estão em constante avaliação à procura de melhorias para entregar os melhores projetos para nossos clientes."} imagem={excelencia}
        />
        <Iten titulo={"Ética"} numero={3} texto={" Temos como base do nosso trabalho o respeito para com os preceitos morais da nossa sociedade, bem como todas as leis que regem o nosso país, em especial às normas relativas à projetos e soluções de engenharia."} imagem={etica}
        />
        <Iten titulo={"Inovação"} numero={4} texto={" Nossa empresa está em constante evolução, em busca de inovações no mercado da engenharia civil para melhorar cada vez mais nossos serviços."} imagem={inovaçao}
        />
      </div>

    </section>
  )
}
