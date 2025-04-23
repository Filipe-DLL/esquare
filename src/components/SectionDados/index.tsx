import Image from "next/image";

import sobre from "@/assets/sobre/sobre.png";

export default function SectionQuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="m-20 flex h-[46rem] w-full flex-col items-center justify-center 2xl:mb-20 2xl:h-full"
    >
      {/* box */}
      <div className="w-full">
        {/* dados */}
        <div className="flex h-36 items-center justify-center gap-4 w-full bg-[#0f3090] text-5xl font-black text-[#546fad]">
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
        <div className="bg flex items-center justify-center w-full">
          {/* texto */}
          <div className="font-black text-2xl w-1/2">
            <p className="">
              Projetos complementares completos para garantir 
              <span className="text-black"> eficiência</span>, <span className="text-black">segurança</span> e{" "}
              <span className="text-black">fluidez</span>
              na sua obra.
            </p>
            <div>Botão</div>
          </div>
          {/* imagem */}
          <Image
            src={sobre}
            alt="Sobre"
            height={500}
            priority={true}
            className="cursor-pointer w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
