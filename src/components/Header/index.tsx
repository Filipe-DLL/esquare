import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Header/reduzida-cinza.svg";
import MenuClientSide from "@/components/Header/Menu/MenuClientSide";
import { Instagram } from "lucide-react";
import whatsapp from "@/assets/SectionInicio/whatsapp_.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-16 w-full bg-azulPetrolio">
      <div className="mx-20 h-full md:mx-5">
        <nav className="flex h-full flex-row items-center justify-between">
          {/* logo */}
          <Link href={"/#Início"}>
            <Image
              src={logo}
              alt="logo"
              height={32}
              priority={true}
              className="cursor-pointer"
            />
          </Link>

          <div></div>

          {/* navegação */}
          <ul className="flex flex-row items-center gap-9 font-bold text-gray-100 md:hidden">
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/#Início"}>Início</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/sobre"}>Quem Somos</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/servicos"}>Serviços</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/projetos"}>Projetos</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/links"}>Links</Link>
            </li>
          </ul>

          {/* WhatsApp */}
          <div className="flex items-center justify-between gap-28 xl:gap-6">
            <Link
              href={"https://api.whatsapp.com/send?phone=5588981861972"}
              className="lg:hidden"
            >
              <div className="m-auto flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-[#eeaa6b] px-6 text-center text-xl font-medium text-black transition-all ease-in-out  hover:bg-[#bb8554] lg:px-2 lg:text-base">
                Peça um Orçamento
              </div>
            </Link>

            <ul className="flex flex-row gap-3 font-bold text-gray-100 md:hidden">
              <li>
                <Link href={"https://api.whatsapp.com/send?phone=5588981861972"}>
                  <Image
                    src={whatsapp}
                    height={75}
                    alt="Solicite um orçamento via WhatsApp!"
                    className="h-6 w-auto"
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/esquareengenharia/"}>
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <MenuClientSide />
        </nav>
      </div>
    </header>
  );
}
