import Image from "next/image";
import Link from "next/link";
import logo from "../assets/REDUZIDA-AZUL.svg";

export default function NavBar() {
  return (
    <header className="h-16 bg-zinc-300 w-full fixed">
      <div className="mx-20 h-full">
        <nav className="flex flex-row items-center justify-between h-full">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={32}
              className="cursor-pointer" />
          </Link>
          <ul className="flex flex-row gap-9 font-bold">
            <li className="cursor-pointer"><Link href={"#Início"} >Início</Link></li>
            <li className="cursor-pointer"><Link href={"#SobreNos"} >Sobre nós</Link></li>
            <li className="cursor-pointer"><Link href={"#Projetos"} >Projetos</Link></li>
            <li className="cursor-pointer"><Link href={"#Serviços"} >Serviços</Link></li>
            <li className="cursor-pointer"><Link href={"#Contato"}  >Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
