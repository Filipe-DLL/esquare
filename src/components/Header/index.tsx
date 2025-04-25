import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Header/reduzida-cinza.svg";
import MenuClientSide from "@/components/Header/Menu/MenuClientSide";
import { Facebook, Instagram } from "lucide-react";

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
          <ul className="flex flex-row gap-9 font-bold text-gray-100 md:hidden">
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/#Início"}>Início</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/sobre"}>Quem Somos</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/#Serviços"}>Serviços</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/#Projetos"}>Projetos</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={"/links"}>Links</Link>
            </li>
          </ul>

          {/* WhatsApp */}
          <div className="flex items-center justify-between gap-28">

            <Link href={"https://api.whatsapp.com/send?phone=5588981861972"}>
              <div className="m-auto flex h-full w-full px-8 cursor-pointer items-center justify-center rounded-3xl bg-[#eeaa6b] text-center text-xl font-medium text-black  transition-all ease-in-out hover:bg-[#bb8554]">
                Peça um Orçamento
              </div>
            </Link>

            <ul className="flex flex-row gap-3 font-bold text-gray-100 md:hidden">
              <li>
                <Link href={"/links"}>
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href={"/links"}>
                  <Facebook />
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <MenuClientSide />
        </nav>
      </div >
    </header >
  );
}
