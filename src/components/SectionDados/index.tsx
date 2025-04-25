import Image from "next/image";

import sobre from "@/assets/sobre/sobre.png";
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
        <div className="flex h-44 w-full items-center justify-center gap-4 bg-[#0f3090] text-7xl font-black text-[#546fad]">
          <p className="relative flex flex-col items-center">
            +12.000m²{" "}
            <span className="-mt-5 text-2xl font-black tracking-widest text-[#d9d9d9]">
              PROJETADOS
            </span>
          </p>
          <p className="relative flex flex-col items-center">
            +65{" "}
            <span className="-mt-5 text-2xl font-black  text-[#d9d9d9]">
              PROJETOS ENTREGUES
            </span>
          </p>
          <p className="relative flex flex-col items-center">
            <span className="z-10 -mb-5 text-2xl font-black tracking-widest text-[#d9d9d9]">
              ATUAÇÃO EM
            </span>{" "}
            10 Cidades
          </p>
        </div>

        {/* conteúdo */}
        <div className="bg flex w-full items-center justify-center bg-[#d0d4da]">
          {/* texto */}
          <div className="flex w-2/6 flex-col justify-end text-6xl font-black">
            <p className="text-start">
              Projetos complementares completos para garantir
              <span className="text-black"> eficiência</span>,{" "}
              <span className="text-black">segurança</span> e{" "}
              <span className="text-black">fluidez </span>
              na sua obra.
            </p>
            {/* botão */}
            <Link href={"/sobre"} className="flex h-12">
              <div className="mt-5 flex h-full cursor-pointer items-center justify-center rounded-full bg-[#161c33] p-8 px-12 text-center text-2xl font-bold text-gray-50 transition-all ease-in-out hover:bg-[#263059]">
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
            className="-mt-12 w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
