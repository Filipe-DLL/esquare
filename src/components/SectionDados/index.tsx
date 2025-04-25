import Image from "next/image";

import sobre from "@/assets/sobre/sobre.png"
import Link from "next/link";

export default function SectionQuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="flex w-full flex-col items-center justify-center"
    >
      {/* box */}
      <div className="w-full">
        {/* dados */}
        <div className="flex h-44 items-center justify-center gap-4 w-full bg-[#0f3090] text-7xl font-black text-[#546fad]">
          <p className="flex flex-col items-center relative">
            +12.000m² <span className="text-2xl font-black -mt-5 tracking-widest text-[#d9d9d9]">PROJETADOS</span>
          </p>
          <p className="flex flex-col items-center relative">
            +65 <span className="text-2xl font-black -mt-5  text-[#d9d9d9]">PROJETOS ENTREGUES</span>
          </p>
          <p className="flex flex-col items-center relative">
            <span className="text-2xl font-black -mb-5 tracking-widest z-10 text-[#d9d9d9]">ATUAÇÃO EM</span> 10 Cidades
          </p>
        </div>

        {/* conteúdo */}
        <div className="bg flex items-center justify-center w-full bg-[#d0d4da]">
          {/* texto */}
          <div className="flex flex-col font-black text-6xl w-2/6 flex justify-end">
            <p className="text-start">
              Projetos complementares completos para garantir
              <span className="text-black"> eficiência</span>, <span className="text-black">segurança</span> e{" "}
              <span className="text-black">fluidez </span>
              na sua obra.
            </p>
            {/* botão */}
            <Link href={"/sobre"} className="flex h-12">
              <div className="flex h-full mt-5 p-8 px-12 cursor-pointer items-center justify-center rounded-full bg-[#161c33] text-center text-2xl font-bold text-gray-50 transition-all ease-in-out hover:bg-[#263059]">
                Saiba mais sobre nós
              </div>
            </Link>
          </div>
          {/* imagem */}
          <Image
            src={sobre}
            alt="Sobre"
            width={500}
            height={500}
            quality={100}
            unoptimized={true}
            priority={true}
            className="w-1/2 -mt-12"
          />
        </div>
      </div>
    </section>
  );
}
