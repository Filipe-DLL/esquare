import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/Header/reduzida-cinza.svg'
import MenuClientSide from '@/components/Header/Menu/MenuClientSide'

export default function Header() {
  return (
    <header className="fixed top-0 z-10 h-16 w-full bg-azulPetrolio">
      <div className="mx-20 h-full md:mx-5">
        <nav className="flex h-full flex-row items-center justify-between">
          {/* logo */}
          <Link href={'#Início'}>
            <Image
              src={logo}
              alt="logo"
              height={32}
              priority={true}
              className="cursor-pointer"
            />
          </Link>

          {/* navegação */}
          <ul className="flex flex-row gap-9 font-bold text-gray-100 md:hidden">
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={'/#Início'}>Início</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={'/#QuemSomos'}>Quem Somos</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={'/#Serviços'}>Serviços</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={'/#Projetos'}>Projetos</Link>
            </li>
            <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
              <Link href={'/#Contato'}>Contato</Link>
            </li>
          </ul>

          {/* Menu */}
          <MenuClientSide />
        </nav>
      </div>
    </header>
  )
}
