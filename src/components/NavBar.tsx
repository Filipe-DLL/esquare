import Image from "next/image";
import logo from "../assets/REDUZIDA-AZUL.svg";

export default function NavBar() {
  return (
    <div className="h-16 bg-zinc-300 w-full fixed">
      <div className=" mx-20 h-full">
        <nav className="flex flex-row items-center justify-between h-full">
          <Image src={logo} alt="logo" height={32}
            className="cursor-pointer" />
          <ul className="flex flex-row gap-9 font-bold">
            <li className="cursor-pointer">Início</li>
            <li className="cursor-pointer">Sobre nós</li>
            <li className="cursor-pointer">Projetos</li>
            <li className="cursor-pointer">Serviços</li>
            <li className="cursor-pointer">Contato</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
