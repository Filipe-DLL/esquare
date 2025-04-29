import Image from "next/image";

import esquare from "@/assets/footer/HORIZONTAL - CINZA 3.svg";
import { Instagram, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="animate__fadeIn animate__animated bottom-0 flex h-60 w-full flex-col items-center justify-center bg-azulPetrolio p-8 text-gray-50 lg:h-full md:p-2"
    >
      {/* container */}
      <div className="flex w-full items-start justify-evenly gap-24 xl:gap-8 lg:flex-wrap md:w-full md:flex-col md:items-center">
        {/* ESQUARE */}
        <div className="flex flex-col gap-4 xl:w-5/12 lg:items-center md:w-full">
          <Image src={esquare} alt="ESQUARE" width={240} priority={true} />
        </div>

        {/* Contatos */}
        <div className="flex flex-col xl:w-5/12 lg:items-center md:w-full">
          <h2 className="mb-8 text-xl font-extrabold">Contatos</h2>
          <div className="flex  flex-col gap-2 font-medium">
            <div className="flex items-center gap-4 2sm:flex-col">
              <Mail size={20} />
              <h2 className="text-base">esquareengenharia@gmail.com</h2>
            </div>

            <div className="flex items-center gap-4 2sm:flex-col">
              <Link
                href={"https://www.instagram.com/esquareengenharia/"}
                className="flex items-center gap-4 2sm:flex-col"
              >
                <Instagram size={20} />
                <h2 className="text-base">@esquareengenharia</h2>
              </Link>
            </div>

            <div className="flex items-center gap-4 2sm:flex-col">
              <PhoneCall size={20} />
              <h2 className="text-base">(88) 98186-1972</h2>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="flex flex-col xl:w-5/12 lg:items-center">
          <h2 className="mb-8 text-xl font-extrabold">Endereço</h2>
          <p className="font-medium">
            Av. Ailton Gomes, Nº 3076
            <br />
            Lagoa Seca, Juazeiro do Norte - CE, 63040-602
          </p>
        </div>
      </div>
    </footer>
  );
}
