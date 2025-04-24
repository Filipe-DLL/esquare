import Image from "next/image";

import sobre from "@/assets/sobre/sobre.png";

export default function SectionQuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="flex h-[46rem] w-full flex-col items-center justify-center 2xl:mb-20 2xl:h-full"
    >
      {/* box */}
      <div className="w-full">
        {/* dados */}
        <div className="flex h-40 items-center justify-center gap-4 w-full bg-[#0f3090] text-6xl font-black text-[#546fad]">
          <p className="flex flex-col items-center">
            +12.000m² <span className="text-lg font-black text-[#d9d9d9]">PROJETADOS</span>
          </p>
          <p className="flex flex-col items-center">
            +65 <span className="text-lg font-black text-[#d9d9d9]">PROJETOS ENTREGUES</span>
          </p>
          <p className="flex flex-col items-center">
            <span className="text-lg font-black text-[#d9d9d9]">ATUAÇÃO EM</span> 10 Cidades
          </p>
        </div>

        {/* conteúdo */}
        <div className="bg flex items-center justify-center w-full bg-[#d0d4da]">
          {/* texto */}
          <div className="font-black text-6xl w-2/6 flex justify-end">
            <p className="text-start">
              Projetos complementares completos para garantir 
              <span className="text-black"> eficiência</span>, <span className="text-black">segurança</span> e{" "}
              <span className="text-black">fluidez </span>
              na sua obra.
            </p>
            {/* botão */}
            {/* <div>Botão</div> */}
          </div>
          {/* imagem */}
          <Image
            src={sobre}
            alt="Sobre"
            height={500}
            priority={true}
            className="cursor-pointer w-1/2 -mt-24 -ml-44"
          />
        </div>
      </div>
    </section>
  );
}
