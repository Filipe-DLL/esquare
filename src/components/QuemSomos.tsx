import Image from "next/image";

import Botao from "./Botao";

import image1 from "@/assets/sobreNos/img1.jpg";
import image2 from "@/assets/sobreNos/img2.jpg";
import image3 from "@/assets/sobreNos/img3.jpg";
import image4 from "@/assets/sobreNos/img4.jpg";

export default function QuemSomos() {
  return (
    <section id="QuemSomos" className="w-full flex flex-col items-center justify-center">

      {/* Titulo */}
      <h1 className="mt-20 flex items-center justify-center text-3xl font-black uppercase">Quem Somos</h1>

      {/* box */}
      <div className="h-[44rem] w-5/6 p-8 mt-6 bg-azulPetrolio text-gray-50 rounded-3xl flex items-center justify-between gap-10 relative">

        {/* container */}
        <div className="h-full flex flex-col justify-between">
          <div className="flex items-center gap-12">
            <Image src={image1} alt="" width={280} height={185}
              className="rounded-3xl" />
            <p className="max-w-[68rem] text-xl font-semibold text-justify">
              A Esquare nasceu no polo do cariri cearense com o objetivo de fornecer os melhores serviços relacionados a engenharia civil na região, tendo sempre o foco na satisfação do cliente em busca do sonho de construir sua casa própria ou seu empreendimento.
            </p>
          </div>
          <div className="flex items-center gap-12">
            <Image src={image2} alt="" width={280} height={185}
              className="rounded-3xl" />
            <p className="max-w-[68rem] text-xl font-semibold text-justify">
              Com uma ampla experiência de mercado acerca de projetos e construção, trazemos as melhores soluções de projetos para que você tenha uma melhor economia e menos dor de cabeça na hora da construção.
            </p>
          </div>
          <div className="flex items-center gap-12">
            <Image src={image3} alt="" width={280} height={185}
              className="rounded-3xl" />
            <p className="max-w-[68rem] text-xl font-semibold text-justify">
              Entre em contato conosco e faça já um orçamento para qualquer de nossos serviços!
            </p>
          </div>
        </div>

        <div>
          <Image src={image4} alt="" width={320}
            className="rounded-3xl max-w-xs" />
        </div>

        {/* Botão */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Botao />
        </div>

      </div>


    </section>
  )
}
