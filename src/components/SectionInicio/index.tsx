import Image from "next/image";

import background from "@/assets/SectionInicio/Completo.png";
import esquare from "@/assets/SectionInicio/horizontal-azul.svg";

import Button from "@/components/Button";
import { ChevronsDown } from "lucide-react";

export default function SectionInicio() {
  return (
    <section
      id="Início"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
        {/* Dekstop */}
        <Image
          src={background}
          alt="ESQUARE"
          priority={true}
          className="absolute left-1/2 top-1/2 -z-50 max-h-[850px] w-auto -translate-x-1/2 -translate-y-1/2 transform bg-cover sm:hidden"
        />

        {/* Mobile */}
        <Image
          src={background}
          alt="ESQUARE"
          priority={true}
          className="absolute left-1/2 top-1/2 -z-50 hidden min-h-[400px] min-w-[600px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden bg-cover md:flex"
        />

        <div className="h-1/6"></div>

        <div className="md:bg-opacity-65 flex h-1/3 w-screen items-center justify-center bg-background bg-opacity-80 md:h-auto md:min-h-[130px]">
          <Image src={esquare} alt="ESQUARE" priority={true} className="" />
        </div>

        <div className=" flex h-1/3 flex-col items-center justify-between">
          <div className=""></div>
          <div className="h-14 w-96 sm:w-72">
            <Button />
          </div>
          <ChevronsDown size={55} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
